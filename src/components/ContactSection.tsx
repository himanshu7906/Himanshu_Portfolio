import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "himanshu2001kashyap@gmail.com",
    href: "mailto:himanshu2001kashyap@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "himanshukashyap7906",
    href: "https://www.linkedin.com/in/himanshukashyap7906",
  },
  { icon: <MapPin size={18} />, label: "Location", value: "Aligarh, India", href: "#" },
];

const inputClass =
  "w-full bg-muted/20 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/30 transition-all placeholder:text-muted-foreground/40";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      // Web3Forms access key comes from VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example)
      data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message", { description: result.message || "Please try again later." });
      }
    } catch {
      toast.error("An error occurred", { description: "Please check your internet connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] aurora opacity-30 rounded-full" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Got a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 lg:col-span-5 space-y-4"
          >
            <div className="glass-card gradient-border rounded-xl p-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm text-foreground font-medium">Available for new projects</p>
                <p className="text-xs text-muted-foreground">Usually replies within a day</p>
              </div>
            </div>

            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card spotlight-card rounded-xl p-4 flex items-center gap-4 group block hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground truncate">{item.value}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="md:col-span-7 lg:col-span-7 glass-card gradient-border p-6 md:p-8 space-y-5 lg:ml-8"
          >
            <div>
              <label htmlFor="contact-name" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] relative overflow-hidden ${
                isSubmitting ? "opacity-70 cursor-wait" : ""
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send size={15} className={isSubmitting ? "animate-pulse" : ""} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
