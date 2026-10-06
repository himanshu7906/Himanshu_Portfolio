import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/portfimage-removebg-preview.png";
import resumePdf from "@/assets/Himanshu_Kashyap_Resume.pdf";
import ParticleSphere from "@/components/effects/ParticleSphere";
import TiltCard from "@/components/effects/TiltCard";

const roles = ["Full-Stack Engineer", "Generative AI Enthusiast", "React Specialist", "Problem Solver"];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "7+", label: "Certifications" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // typewriter: type the role, hold, delete it, move to the next
  useEffect(() => {
    const role = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isTyping) {
      if (displayText.length < role.length) {
        timer = setTimeout(() => setDisplayText(role.slice(0, displayText.length + 1)), 80);
      } else {
        timer = setTimeout(() => setIsTyping(false), 1500);
      }
    } else if (displayText.length > 0) {
      timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else {
      setRoleIndex((i) => (i + 1) % roles.length);
      setIsTyping(true);
    }
    return () => clearTimeout(timer);
  }, [displayText, isTyping, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <ParticleSphere className="absolute inset-0 z-[1] opacity-70" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-foreground blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-border/30 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
      </div>

      {/* Floating bubbles, positioned deterministically so they don't jump between renders */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]"
          style={{
            width: `${15 + ((i * 11) % 45)}px`,
            height: `${15 + ((i * 11) % 45)}px`,
            top: `${5 + ((i * 19) % 90)}%`,
            left: `${5 + ((i * 23) % 90)}%`,
          }}
          animate={{
            y: [0, -40 - (i % 30), 0],
            x: [0, 15 - (i % 30), 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1 + (i % 4) * 0.05, 1],
          }}
          transition={{ duration: 8 + (i % 6) * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-xs font-mono tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted-foreground">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
              I'm <span className="text-gradient">Himanshu</span>
              <br />
              <span className="text-gradient">Kashyap</span>
            </h1>

            <div className="h-10 md:h-12 mb-8 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-lg md:text-xl text-muted-foreground">{displayText}</span>
              <span className="w-0.5 h-6 bg-primary ml-1 animate-blink inline-block" />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 bg-muted/30 px-3 py-1.5 rounded-full">
                <MapPin size={13} className="text-primary" /> Aligarh, India
              </span>
              <span className="flex items-center gap-1.5 bg-muted/30 px-3 py-1.5 rounded-full">
                <Mail size={13} className="text-primary" /> himanshu2001kashyap@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] relative overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href={resumePdf}
                download="Himanshu_Kashyap_Resume.pdf"
                className="px-7 py-3.5 rounded-full border border-border text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/himanshukashyap7906"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="px-4 py-3.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/himanshu7906"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="px-4 py-3.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={18} />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex gap-8 justify-center lg:justify-start"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 max-w-[90px]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[480px] h-[340px] md:h-[480px] rounded-full border border-dashed border-primary/20 animate-spin-slow" />
            <TiltCard
              max={10}
              lift={0}
              className="w-80 md:w-[500px] lg:w-[650px] relative z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"
            >
              <img
                src={heroImage}
                alt="Himanshu Kashyap"
                className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(var(--primary),0.3)] animate-float-slow"
              />
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
