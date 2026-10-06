import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Galgotias University", year: "2023 – 2025" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Dr. Bhimrao Ambedkar University", year: "2020 – 2023" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> Education & Publication
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Academic <span className="text-gradient">Background</span>
          </h3>
        </motion.div>

        <div className="relative pl-10 md:pl-14">
          {/* timeline line draws itself downward on scroll-in */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-3 md:left-5 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-accent-foreground/40 to-transparent"
          />

          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[1.85rem] md:-left-[2.35rem] top-6 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                </span>
                <TiltCard max={5} className="glass-card spotlight-card p-6 flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-xs text-primary/70 font-mono mt-1">{edu.year}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-[1.85rem] md:-left-[2.35rem] top-6 w-6 h-6 rounded-full bg-background border-2 border-accent-foreground flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-foreground" />
              </span>
              <TiltCard max={5} className="glass-card gradient-border spotlight-card p-6 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-foreground/10 blur-2xl" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center text-accent-foreground flex-shrink-0 group-hover:bg-accent-foreground group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6">
                    <BookOpen size={22} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent-foreground/10 text-accent-foreground border border-accent-foreground/30">
                      Research Paper
                    </span>
                    <a
                      href="https://www.jetir.org/papers/JETIR2501427.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 font-semibold text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1.5 group/link"
                    >
                      Depression Detection Using Machine Learning
                      <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-xs text-accent-foreground/70 font-mono mt-1">Published in JETIR</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
