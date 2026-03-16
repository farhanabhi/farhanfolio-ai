import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages } from "lucide-react";

const languages = ["English", "Hindi", "Malayalam", "Tamil"];

const LanguagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Languages</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Languages I <span className="gradient-text">speak</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow transition-shadow duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Languages size={18} />
                </div>
                <span className="font-medium text-sm">{lang}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
