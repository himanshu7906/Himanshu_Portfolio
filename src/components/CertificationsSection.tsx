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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Credentials & <span className="text-gradient">Badges</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-xl p-4 flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 flex-shrink-0">
                <Award size={16} />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
