import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Bot,
  Boxes,
  Camera,
  ExternalLink,
  Github,
  MessagesSquare,
  PenLine,
  ScanText,
  Share2,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  /** Featured projects span the full grid width. */
  featured?: boolean;
  badge?: string;
  icon: ReactNode;
  /** Cover background used when there is no screenshot. */
  gradient: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "MediSync",
    description:
      "Premium full-stack doctor appointment ecosystem built on the MERN stack. Features a sleek SaaS UI with GSAP animations, glassmorphism components, multi-role access (Patient, Doctor, Admin), Stripe/Razorpay payment integration, and Cloudinary-powered image management.",
    tags: ["React", "Node.js", "MongoDB", "GSAP", "Tailwind", "Stripe"],
    github: "https://github.com/himanshu7906/MediSync",
    featured: true,
    badge: "v2.0 · Full-Stack",
    icon: <Stethoscope size={26} />,
    gradient: "linear-gradient(135deg, hsl(190 80% 46%), hsl(258 82% 58%))",
  },
  {
    title: "NestJS Microservices",
    description:
      "Enterprise-grade microservices architecture using NestJS, Prisma ORM, and PostgreSQL. Implements a gateway-to-microservice pattern over TCP transport with JWT authentication, Refresh Token Rotation, bcrypt hashing, and Role-Based Access Control (RBAC). Fully Dockerized with three independent services: API Gateway, Auth Service, and User Service — each with their own Prisma schema and migrations.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "JWT", "RBAC", "Docker", "TypeScript"],
    github: "https://github.com/himanshu7906/nest-microservices",
    featured: true,
    badge: "Microservices · Enterprise",
    icon: <Boxes size={26} />,
    gradient: "linear-gradient(135deg, hsl(330 72% 52%), hsl(262 82% 58%))",
  },
  {
    title: "Agent Squad",
    description:
      "Team of 10 AI agents, each an expert in one area (architecture, backend, security, QA and more), installed as slash commands in Claude Code, Codex and Antigravity. Use them one at a time or as a team, with memory that carries across sessions.",
    tags: ["AI Agents", "Multi-Agent", "Claude Code", "PowerShell"],
    github: "https://github.com/himanshu7906/Agent-Squad",
    badge: "AI · Dev Tools",
    icon: <Users size={24} />,
    gradient: "linear-gradient(135deg, hsl(265 80% 60%), hsl(185 80% 45%))",
  },
  {
    title: "Scrollshot",
    description:
      "Browser extension for Chrome, Edge and Firefox that captures a full scrolling page, the visible screen, a dragged area or a single element, and copies the image straight to your clipboard. Sticky headers don't repeat down long captures.",
    tags: ["JavaScript", "Browser Extension", "Manifest V3", "Canvas API"],
    github: "https://github.com/himanshu7906/Scrollshot",
    badge: "Browser Extension",
    icon: <Camera size={24} />,
    gradient: "linear-gradient(135deg, hsl(258 90% 64%), hsl(205 100% 58%))",
  },
  {
    title: "Mock Interview App",
    description:
      "AI-powered mock interview platform enabling real-time technical & behavioral interview practice via WebSockets. Features session configuration (role, difficulty, topic), live AI-driven questioning using OpenAI/Gemini, detailed performance analysis with scoring & feedback, and full interview history. Built with a FastAPI backend and a React + TypeScript frontend.",
    tags: ["FastAPI", "Python", "React", "WebSockets", "OpenAI", "Gemini", "PostgreSQL"],
    github: "https://github.com/himanshu7906/MockInterviewApp",
    badge: "AI · Full-Stack",
    icon: <MessagesSquare size={24} />,
    gradient: "linear-gradient(135deg, hsl(258 82% 60%), hsl(218 82% 56%))",
  },
  {
    title: "MediBot",
    description:
      "Intelligent medical chatbot using LangChain, Vector DB, and ChatGPT for accurate health information retrieval and conversational AI.",
    tags: ["LangChain", "VectorDB", "ChatGPT", "Python"],
    icon: <Bot size={24} />,
    gradient: "linear-gradient(135deg, hsl(160 70% 44%), hsl(190 82% 50%))",
  },
  {
    title: "Password Manager",
    description:
      "Secure password management application built with the MERN stack featuring encrypted storage and user authentication.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    icon: <ShieldCheck size={24} />,
    gradient: "linear-gradient(135deg, hsl(40 92% 55%), hsl(330 72% 56%))",
  },
  {
    title: "AI Code Reviewer & ATS Resume Sorter",
    description: "AI-powered tools for automated code review and ATS-compatible resume parsing and ranking.",
    tags: ["Python", "AI/ML", "NLP", "React"],
    icon: <ScanText size={24} />,
    gradient: "linear-gradient(135deg, hsl(280 76% 56%), hsl(200 82% 52%))",
  },
  {
    title: "Blog App",
    description: "Full-featured blogging platform with JWT auth, image uploads via Multer, and rich text editing.",
    tags: ["MERN", "JWT", "Multer", "REST API"],
    icon: <PenLine size={24} />,
    gradient: "linear-gradient(135deg, hsl(20 86% 56%), hsl(330 72% 56%))",
  },
  {
    title: "Twitter ETL Pipeline",
    description: "Automated data pipeline extracting Twitter data using Apache Airflow for analysis and visualization.",
    tags: ["Python", "Airflow", "ETL", "Data"],
    icon: <Share2 size={24} />,
    gradient: "linear-gradient(135deg, hsl(205 86% 50%), hsl(258 82% 60%))",
  },
  {
    title: "Health Prediction ML",
    description: "Heart disease and mental health prediction models achieving 95% accuracy using ensemble methods.",
    tags: ["Python", "Scikit-learn", "ML", "95% Acc"],
    icon: <Activity size={24} />,
    gradient: "linear-gradient(135deg, hsl(0 76% 56%), hsl(280 76% 56%))",
  },
];

/** "Agent Squad" -> "AS" */
const initials = (title: string) =>
  title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ProjectCover = ({ project, index }: { project: Project; index: number }) => (
  <div className={`relative overflow-hidden ${project.featured ? "h-44 md:h-52" : "h-40"}`}>
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    ) : (
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: project.gradient }}
      >
        <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
        <span className="absolute -bottom-6 left-3 text-[8rem] leading-none font-bold text-white/10 select-none font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {project.icon}
          </div>
        </div>
        <span className="absolute top-3 left-3 text-xs font-mono font-semibold text-white/90 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/20">
          {initials(project.title)}
        </span>
      </div>
    )}
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card via-card/70 to-transparent" />
  </div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50" /> Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={project.featured ? "lg:col-span-3 md:col-span-2" : ""}
            >
              <TiltCard
                max={project.featured ? 4 : 7}
                lift={5}
                className="glass-card spotlight-card group flex flex-col relative overflow-hidden h-full"
              >
                {project.featured && (
                  <div className="absolute top-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                )}
                <ProjectCover project={project} index={i} />

                <div className="p-6 pt-2 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center justify-end mb-2 min-h-[24px]">
                    {project.badge && (
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 font-mono tracking-wide flex items-center gap-1.5">
                        <Star size={10} className="fill-primary" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className={`${project.featured ? "md:flex md:gap-8" : ""} flex-1`}>
                    <div className={project.featured ? "md:flex-1" : ""}>
                      <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </h4>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                    </div>

                    <div className={project.featured ? "md:flex md:flex-col md:justify-end md:min-w-[220px]" : ""}>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/15 group-hover:border-primary/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 flex items-center gap-1.5 hover:bg-muted/20"
                          >
                            <Github size={13} /> Code
                          </a>
                        ) : (
                          <button className="text-xs px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 flex items-center gap-1.5 hover:bg-muted/20">
                            <Github size={13} /> Code
                          </button>
                        )}
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-4 py-2 rounded-full border border-primary/40 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-1.5"
                          >
                            <ExternalLink size={13} /> Demo
                          </a>
                        ) : (
                          <button className="text-xs px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center gap-1.5 hover:bg-primary/5">
                            <ExternalLink size={13} /> Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
