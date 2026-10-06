import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BadgeCheck, Bot, BrainCircuit, CodeXml, Database, ShieldCheck } from "lucide-react";
import CountUp from "@/components/effects/CountUp";
import TiltCard from "@/components/effects/TiltCard";

const certifications = [
  { name: "Full Stack Development Bootcamp", issuer: "Bootcamp", icon: <CodeXml size={18} />, accent: "258 82% 62%" },
  { name: "Generative AI", issuer: "Microsoft", icon: <Bot size={18} />, accent: "190 82% 50%" },
  { name: "OCI Generative AI Professional", issuer: "Oracle", icon: <Bot size={18} />, accent: "0 76% 58%" },
  { name: "Big Data Computing", issuer: "NPTEL", icon: <Database size={18} />, accent: "150 70% 46%" },
  { name: "Machine Learning", issuer: "Cisco", icon: <BrainCircuit size={18} />, accent: "210 86% 56%" },
  { name: "AI-ML Virtual Certificate", issuer: "Google", icon: <BrainCircuit size={18} />, accent: "40 92% 56%" },
  { name: "Network Security", issuer: "AICTE", icon: <ShieldCheck size={18} />, accent: "280 76% 60%" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-sm font-mono text-primary mb-2 tracking-wider flex items-center gap-2">
              <span className="w-6 h-px bg-primary/50" /> Certifications
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Credentials & <span className="text-gradient">Badges</span>
            </h3>
          </div>
          <div className="glass-card px-5 py-3 flex items-center gap-3">
            <Award size={20} className="text-primary" />
            <div>
              <div className="text-2xl font-bold text-gradient leading-none">
                <CountUp end={certifications.length} suffix="+" />
              </div>
              <div className="text-[11px] text-muted-foreground">credentials earned</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                max={7}
                className="glass-card spotlight-card rounded-2xl p-5 min-h-[120px] flex flex-col gap-3 group h-full relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ background: `hsl(${cert.accent})` }} />
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `hsl(${cert.accent})` }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `hsl(${cert.accent} / 0.12)`, color: `hsl(${cert.accent})` }}
                  >
                    {cert.icon}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400/90">
                    <BadgeCheck size={13} /> Verified
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <span
                    className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      color: `hsl(${cert.accent})`,
                      borderColor: `hsl(${cert.accent} / 0.35)`,
                      background: `hsl(${cert.accent} / 0.08)`,
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
