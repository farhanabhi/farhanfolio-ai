import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Globe, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Bootstrap", "React"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Qlik Sense"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Skills</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Technical <span className="gradient-text">expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass rounded-xl p-6 hover:glow transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <cat.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
