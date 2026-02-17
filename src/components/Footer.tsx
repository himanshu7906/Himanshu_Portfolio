import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground relative z-10">
      <p className="flex items-center gap-1.5">
        © {new Date().getFullYear()} Himanshu Kashyap. Built with <Heart size={13} className="text-primary animate-pulse" />
      </p>
      <p className="font-mono text-xs text-muted-foreground/60">Full-Stack Developer | Generative AI Enthusiast</p>
    </div>
  </footer>
);

export default Footer;
