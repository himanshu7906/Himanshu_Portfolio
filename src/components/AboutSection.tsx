import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

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
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
            <Sparkles size={18} className="text-primary/40 absolute top-6 right-6" />

            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              MCA student and <span className="text-foreground font-medium">Software Engineer</span> skilled in{" "}
              <span className="text-primary">React.js</span>, <span className="text-primary">Node.js</span>,{" "}
              <span className="text-primary">Python</span>, API integration, AI/ML workflows, and data visualization.
              Certified in Full-Stack Development, Cybersecurity, and Generative AI. Passionate about building
              intelligent, scalable applications that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
