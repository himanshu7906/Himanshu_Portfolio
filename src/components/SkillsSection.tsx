import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, CodeXml, Database, Globe, Wrench } from "lucide-react";
import Marquee from "@/components/effects/Marquee";
import TiltCard from "@/components/effects/TiltCard";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    icon: <CodeXml size={20} />,
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
    skills: ["Git", "Docker", "Linux", "Postman", "VS Code", "Jupyter", "Antigravity", "Cursor"],
  },
  {
    title: "Domains",
    icon: <Globe size={20} />,
    skills: [
      "Web App Development",
      "API Integration",
      "AI/ML",
      "GenAI",
      "ETL",
      "Networking",
      "Data Visualization",
      "AI-assisted Dev",
    ],
  },
];

const marqueeTop = [
  "React.js",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Python",
  "Django",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
];

const marqueeBottom = [
  "MongoDB",
  "PostgreSQL",
  "VectorDB",
  "LangChain",
  "Gemini",
  "Claude",
  "ChatGPT",
  "HuggingFace",
  "Docker",
  "Git",
  "Linux",
  "FastAPI",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="glass-card gradient-border p-8 min-h-[210px] h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                    {group.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 space-y-3"
        >
          <Marquee items={marqueeTop} duration={34} />
          <Marquee items={marqueeBottom} reverse duration={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
