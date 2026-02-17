import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="flex items-center gap-1">
        © {new Date().getFullYear()} Himanshu Kashyap. Built with <Heart size={14} className="text-primary" />
      </p>
      <p className="font-mono text-xs">Full-Stack Developer | Generative AI Enthusiast</p>
    </div>
  </footer>
);

export default Footer;
