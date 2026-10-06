import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: <Github size={16} />, href: "https://github.com/himanshu7906", label: "GitHub" },
  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/himanshukashyap7906", label: "LinkedIn" },
  { icon: <Mail size={16} />, href: "mailto:himanshu2001kashyap@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />
    <div className="container mx-auto flex flex-col items-center gap-6 relative z-10">
      <div className="flex items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full border border-border/60 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            {s.icon}
          </a>
        ))}
        <a
          href="#"
          aria-label="Back to top"
          className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full text-sm text-muted-foreground">
        <p className="flex items-center gap-1.5">
          © {new Date().getFullYear()} Himanshu Kashyap. Built with{" "}
          <Heart size={13} className="text-primary animate-pulse" /> & React
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">Full-Stack Developer | Generative AI Enthusiast</p>
      </div>
    </div>
  </footer>
);

export default Footer;
