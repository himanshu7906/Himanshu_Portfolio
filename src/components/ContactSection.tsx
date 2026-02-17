import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-mono text-primary mb-2 tracking-wider">// Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Got a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: <Mail size={18} />, label: "Email", value: "himanshu2001kashyap@gmail.com", href: "mailto:himanshu2001kashyap@gmail.com" },
              { icon: <Linkedin size={18} />, label: "LinkedIn", value: "himanshukashyap7906", href: "https://www.linkedin.com/in/himanshukashyap7906" },
              { icon: <MapPin size={18} />, label: "Location", value: "Aligarh, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:glow-border transition-all duration-300 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block font-mono">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block font-mono">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block font-mono">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
