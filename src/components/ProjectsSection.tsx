import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MediBot",
    description: "Intelligent medical chatbot using LangChain, Vector DB, and ChatGPT for accurate health information retrieval and conversational AI.",
    tags: ["LangChain", "VectorDB", "ChatGPT", "Python"],
  },
  {
    title: "Password Manager",
    description: "Secure password management application built with the MERN stack featuring encrypted storage and user authentication.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "AI Code Reviewer & ATS Resume Sorter",
    description: "AI-powered tools for automated code review and ATS-compatible resume parsing and ranking.",
    tags: ["Python", "AI/ML", "NLP", "React"],
  },
  {
    title: "Blog App",
    description: "Full-featured blogging platform with JWT auth, image uploads via Multer, and rich text editing.",
    tags: ["MERN", "JWT", "Multer", "REST API"],
  },
  {
    title: "Twitter ETL Pipeline",
    description: "Automated data pipeline extracting Twitter data using Apache Airflow for analysis and visualization.",
    tags: ["Python", "Airflow", "ETL", "Data"],
  },
  {
    title: "Health Prediction ML",
    description: "Heart disease and mental health prediction models achieving 95% accuracy using ensemble methods.",
    tags: ["Python", "Scikit-learn", "ML", "95% Acc"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider">// Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:glow-border transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Project number */}
              <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors font-mono mb-2">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="text-xs px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center gap-1.5">
                  <Github size={13} /> Code
                </button>
                <button className="text-xs px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center gap-1.5">
                  <ExternalLink size={13} /> Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
