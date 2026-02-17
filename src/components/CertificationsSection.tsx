import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  "Full Stack Development Bootcamp",
  "Generative AI – Microsoft",
  "OCI Generative AI Professional",
  "NPTEL Big Data Computing",
  "Cisco Machine Learning",
  "Google AI-ML Virtual Certificate",
  "Network Security – AICTE",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider">// Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Credentials & <span className="text-gradient">Badges</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:glow-border transition-all duration-300 group hover:-translate-y-0.5"
            >
              <Award size={18} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
