import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider">// Education & Publication</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Academic <span className="text-gradient">Background</span>
          </h3>
        </motion.div>

        <div className="space-y-6">
          {[
            { degree: "Master of Computer Applications (MCA)", school: "Galgotias University", year: "2023 – 2025" },
            { degree: "Bachelor of Computer Applications (BCA)", school: "Dr. Bhimrao Ambedkar University", year: "2020 – 2023" },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <p className="text-xs text-primary font-mono mt-1">{edu.year}</p>
              </div>
            </motion.div>
          ))}

          {/* Publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 flex items-start gap-4 hover:glow-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <BookOpen size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Publication</h4>
              <p className="text-muted-foreground text-sm">Depression Detection Using Machine Learning</p>
              <p className="text-xs text-accent font-mono mt-1">Published in JETIR</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
