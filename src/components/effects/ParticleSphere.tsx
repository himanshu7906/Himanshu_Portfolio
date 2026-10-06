import { useEffect, useRef } from "react";

// Three.js is loaded on demand from the CDN so it stays out of the main bundle.
const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThreeLib = any;
let threePromise: Promise<ThreeLib> | null = null;

function loadThree(): Promise<ThreeLib> {
  const w = window as unknown as { THREE?: ThreeLib };
  if (w.THREE) return Promise.resolve(w.THREE);
  if (threePromise) return threePromise;
  threePromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${THREE_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(w.THREE));
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = THREE_SRC;
    script.async = true;
    script.onload = () => resolve(w.THREE);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return threePromise;
}

/** Reads an "H S% L%" CSS variable so the particles match the current theme colours. */
function readHsl(variable: string, fallback: [number, number, number]) {
  const match = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()
    .match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
  const [h, s, l] = match ? [+match[1], +match[2], +match[3]] : fallback;
  return { h: h / 360, s: s / 100, l: l / 100 };
}

/** A slowly rotating shell of glowing points with two wireframe icosahedrons that follow the pointer. */
const ParticleSphere = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let renderer: ThreeLib;
    let removeResize: (() => void) | null = null;
    let removePointer: (() => void) | null = null;
    let disposed = false;

    loadThree()
      .then((THREE) => {
        const container = containerRef.current;
        if (!THREE || !container || disposed) return;

        const width = container.clientWidth;
        const height = container.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
        camera.position.z = 16;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const primary = readHsl("--primary", [258, 89, 66]);
        const accent = readHsl("--accent-foreground", [270, 91, 65]);
        const primaryColor = new THREE.Color().setHSL(primary.h, primary.s, Math.min(primary.l + 0.1, 0.85));
        const accentColor = new THREE.Color().setHSL(accent.h, accent.s, Math.min(accent.l + 0.1, 0.85));

        const count = 1400;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        for (let i = 0; i < count; i++) {
          const radius = 9 + Math.random() * 2.4;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
          color.copy(Math.random() > 0.5 ? primaryColor : accentColor);
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        const points = new THREE.Points(
          geometry,
          new THREE.PointsMaterial({
            size: 0.09,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          }),
        );
        scene.add(points);

        const outer = new THREE.Mesh(
          new THREE.IcosahedronGeometry(5.4, 1),
          new THREE.MeshBasicMaterial({ color: primaryColor, wireframe: true, transparent: true, opacity: 0.18 }),
        );
        scene.add(outer);

        const inner = new THREE.Mesh(
          new THREE.IcosahedronGeometry(2.2, 1),
          new THREE.MeshBasicMaterial({ color: accentColor, wireframe: true, transparent: true, opacity: 0.25 }),
        );
        scene.add(inner);

        const pointer = { x: 0, y: 0 };
        const onPointerMove = (e: PointerEvent) => {
          pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
          pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("pointermove", onPointerMove);
        removePointer = () => window.removeEventListener("pointermove", onPointerMove);

        const onResize = () => {
          const w = container.clientWidth;
          const h = container.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener("resize", onResize);
        removeResize = () => window.removeEventListener("resize", onResize);

        const clock = new THREE.Clock();
        const animate = () => {
          frame = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();
          points.rotation.y = t * 0.05;
          points.rotation.x = Math.sin(t * 0.15) * 0.15;
          outer.rotation.y = -t * 0.08;
          outer.rotation.x = t * 0.05;
          inner.rotation.y = t * 0.18;
          inner.rotation.z = -t * 0.12;
          camera.position.x += (pointer.x * 2.4 - camera.position.x) * 0.04;
          camera.position.y += (-pointer.y * 2.4 - camera.position.y) * 0.04;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
          // with reduced motion, draw a single still frame
          if (reduceMotion) cancelAnimationFrame(frame);
        };
        animate();
      })
      .catch(() => {
        // CDN unavailable: the hero simply renders without the particle layer
      });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      removeResize?.();
      removePointer?.();
      if (renderer) {
        renderer.dispose?.();
        renderer.domElement?.parentNode?.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`pointer-events-none ${className}`} aria-hidden />;
};

export default ParticleSphere;
