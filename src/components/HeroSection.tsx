import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/portfimage-removebg-preview.png";
import resumePdf from "@/assets/Himanshu_Kashyap_Resume.pdf";


const roles = ["Full-Stack Engineer", "Generative AI Enthusiast", "React Specialist", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
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

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-border/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {/* Floating particles & Bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]"
          style={{
            width: `${15 + (i * 11) % 45}px`,
            height: `${15 + (i * 11) % 45}px`,
            top: `${5 + (i * 19) % 90}%`,
            left: `${5 + (i * 23) % 90}%`,
          }}
          animate={{
            y: [0, -40 - (i % 30), 0],
            x: [0, 15 - (i % 30), 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1 + (i % 4) * 0.05, 1],
          }}
          transition={{
            duration: 8 + (i % 6) * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-mono text-sm mb-5 tracking-wider inline-flex items-center gap-2"
            >
              <span className="w-8 h-px bg-primary/50" />
              {'Hello World'}
              <span className="w-8 h-px bg-primary/50" />
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
              I'm{" "}
              <span className="text-gradient">Himanshu</span>
              <br />
              <span className="text-gradient">Kashyap</span>
            </h1>

            <div className="h-10 md:h-12 mb-8 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-lg md:text-xl text-muted-foreground">
                {displayed}
              </span>
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
                className="px-4 py-3.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] scale-110" />

            <div className="w-80 md:w-[500px] lg:w-[650px] relative z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]">
              <img src={heroImage} alt="Coding Illustration" className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(var(--primary),0.3)] animate-float-slow" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
