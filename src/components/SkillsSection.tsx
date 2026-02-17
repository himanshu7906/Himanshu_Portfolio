import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Bot, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 size={20} />,
    skills: ["Python", "JavaScript", "React.js", "Next.js", "Nest.js", "Node.js", "Express.js", "Django", "LangChain"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["MongoDB", "PostgreSQL", "SQL", "VectorDB"],
  },
  {
    title: "Generative AI",
    icon: <Bot size={20} />,
    skills: ["Gemini", "ChatGPT", "Claude", "HuggingFace"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={20} />,
    skills: ["Git", "Docker", "Linux", "Postman", "VS Code", "Jupyter"],
  },
  {
    title: "Domains",
    icon: <Globe size={20} />,
    skills: ["API Integration", "AI/ML", "GenAI", "ETL", "Networking", "Data Visualization", "AI-assisted Dev"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {cat.icon}
                </div>
                <h4 className="font-semibold text-foreground">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
