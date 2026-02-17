import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Sofyrus Technologies",
    period: "May 2025 – Present",
    type: "Full-time",
    bullets: [
      "Working on Fintegra – a financial data integration platform",
      "React.js frontend development with modern UI patterns",
      "API integration and GitHub CI/CD workflows",
      "AI chatbot integration for enhanced user experience",
    ],
  },
  {
    role: "Google AI-ML Virtual Intern",
    company: "AICTE",
    period: "Internship",
    type: "Virtual",
    bullets: [
      "Completed AI/ML modules with hands-on projects",
      "Applied machine learning models to real-world datasets",
    ],
  },
  {
    role: "Network Security Intern",
    company: "AICTE",
    period: "Internship",
    type: "Virtual",
    bullets: [
      "Studied network security protocols and vulnerability assessment",
      "Implemented security best practices in lab environments",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Work <span className="text-gradient">History</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line with animated gradient */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-primary/50 via-accent-foreground/20 to-transparent" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-8 w-3 h-3 rounded-full bg-primary animate-glow-pulse" />

                <div className="glass-card p-6 md:p-8 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                        <Briefcase size={16} className="text-primary" />
                        {exp.role}
                      </h4>
                      <p className="text-primary/80 font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 bg-muted/30 px-3 py-1.5 rounded-full border border-border/30">
                      <Calendar size={11} /> {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
