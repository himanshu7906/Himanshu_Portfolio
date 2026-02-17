import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider">// About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Professional <span className="text-gradient">Summary</span>
          </h3>

          <div className="glass rounded-2xl p-8 md:p-10 glow-border">
            <p className="text-muted-foreground leading-relaxed text-lg">
              MCA student and <span className="text-foreground font-medium">Full-Stack Developer</span> skilled in{" "}
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
