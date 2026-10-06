import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, CodeXml, Rocket, Sparkles } from "lucide-react";
import CountUp from "@/components/effects/CountUp";
import TiltCard from "@/components/effects/TiltCard";

const stats = [
  { icon: <Briefcase size={18} />, end: 1, suffix: "+", label: "Years Experience" },
  { icon: <Rocket size={18} />, end: 15, suffix: "+", label: "Projects Shipped" },
  { icon: <Award size={18} />, end: 7, suffix: "+", label: "Certifications" },
  { icon: <CodeXml size={18} />, end: 20, suffix: "+", label: "Technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Professional <span className="text-gradient">Summary</span>
          </h3>

          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
            <Sparkles size={18} className="text-primary/40 absolute top-6 right-6" />
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              <span className="text-foreground font-medium">Software Engineer</span> with{" "}
              <span className="text-primary">1 year of experience</span> at{" "}
              <span className="text-foreground font-medium">Sofyrus Technologies</span>, skilled in{" "}
              <span className="text-primary">React.js</span>, <span className="text-primary">Node.js</span>,{" "}
              <span className="text-primary">Python</span>, AI/ML, and <span className="text-primary">DevOps</span>.
              Experienced in scalable app development, API integration, and data visualization. Proficient in
              AI-powered tools for coding and debugging. Certified in{" "}
              <span className="text-foreground font-medium">Full-Stack Development</span>,{" "}
              <span className="text-foreground font-medium">Networking</span>, and{" "}
              <span className="text-foreground font-medium">Generative AI</span>, with a focus on
              production-ready development.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard max={10} className="glass-card spotlight-card p-5 text-center group h-full">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
