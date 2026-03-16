import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { title: "Data Scientist Professional Certificate", issuer: "KIMO.AI" },
  { title: "Data Wrangling with Python", issuer: "KIMO.AI" },
  { title: "Linear Algebra for Data Science", issuer: "KIMO.AI" },
  { title: "Advanced Data Structures & Algorithms", issuer: "KIMO.AI" },
  { title: "Data Analytics Essentials", issuer: "Cisco" },
  { title: "What is Data Science?", issuer: "IBM" },
  { title: "JavaScript Essentials", issuer: "Cisco" },
  { title: "Soft Skills", issuer: "TCS iON" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Certifications</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Credentials & <span className="gradient-text">achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:glow transition-shadow duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
