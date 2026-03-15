import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Business Analyst Intern",
    org: "Smart Bridge",
    detail: "Qlik-powered Business Analytics Program",
    contributions: "Analyzed business data using Qlik Sense, created interactive dashboards, and delivered data-driven insights to optimize business processes.",
  },
  {
    role: "Data Science Intern",
    org: "Cognifyz Technologies",
    detail: "Data Science & Analytics",
    contributions: "Worked on real-world data science projects involving data cleaning, exploratory analysis, and building predictive models using Python and ML libraries.",
  },
  {
    role: "Digital Marketing Executive",
    org: "Amalites Technologies",
    detail: "Marketing & Analytics",
    contributions: "Led digital marketing campaigns, analyzed campaign performance metrics, and optimized strategies using data-driven approaches.",
  },
  {
    role: "HR Intern",
    org: "TEN: Investing",
    detail: "Human Resources",
    contributions: "Supported HR operations, managed recruitment pipelines, and contributed to process optimization initiatives.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Professional <span className="gradient-text">journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex gap-6"
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary z-10">
                      <Briefcase size={16} />
                    </div>
                  </div>
                  <div className="flex-1 glass rounded-xl p-6 hover:glow transition-shadow duration-300">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-semibold">{exp.role}</h3>
                      <span className="text-sm text-primary">@ {exp.org}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{exp.detail}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.contributions}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
