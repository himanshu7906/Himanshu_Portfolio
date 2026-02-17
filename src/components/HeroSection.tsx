import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const roles = ["Full-Stack Developer", "Generative AI Enthusiast", "React Specialist", "Problem Solver"];

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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="floating-particle animate-float"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i * 1.5}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono text-sm mb-4 tracking-wider"
            >
              {'<Hello World />'}
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              I'm{" "}
              <span className="text-gradient">Himanshu</span>
              <br />
              <span className="text-gradient">Kashyap</span>
            </h1>

            <div className="h-10 md:h-12 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-lg md:text-xl text-muted-foreground">
                {displayed}
              </span>
              <span className="w-0.5 h-6 bg-primary ml-1 animate-blink inline-block" />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" /> Aligarh, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary" /> himanshu2001kashyap@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="px-7 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/himanshukashyap7906"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 glow-border relative">
              <img src={profileImg} alt="Himanshu Kashyap" className="w-full h-full object-cover" />
            </div>
            {/* Orbiting dot */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "10s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">Scroll down</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
