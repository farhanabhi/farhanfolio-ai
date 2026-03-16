import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Globe, Database, Wrench, Users, BarChart3, Cloud } from "lucide-react";

const categories = [
  {
    title: "AI & Generative AI",
    icon: Brain,
    skills: ["Generative AI (GenAI)", "LLMs", "Prompt Engineering", "ML Integration", "NLP", "Neural Networks", "Scikit-learn", "Regression/Classification", "Random Forest"],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Qlik Sense", "Matplotlib", "Seaborn", "Data Literacy", "Pandas", "Process Optimization", "Workflow Automation"],
  },
  {
    title: "Software Engineering & Cloud",
    icon: Cloud,
    skills: ["Python", "Java", "C", "JavaScript (React.js)", "Express.js", "HTML/CSS/Bootstrap", "REST API", "Flask", "Django", "SaaS Architecture", "DevOps", "Docker", "Git", "AWS", "GCP", "Azure", "Cybersecurity Awareness"],
  },
  {
    title: "Product & Methodologies",
    icon: Wrench,
    skills: ["Agile", "Scrum", "Digital Transformation", "Product Roadmap Strategy", "UX/UI Design Principles", "SEO & Digital Marketing"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "NoSQL", "PostgreSQL"],
  },
  {
    title: "Leadership & Soft Skills",
    icon: Users,
    skills: ["Cross-Functional Collaboration", "Stakeholder Management", "Change Management", "Strategic Problem Solving", "Emotional Intelligence", "Adaptability", "Remote/Hybrid Collaboration", "Conflict Resolution", "Continuous Learning", "Mentorship & Coaching"],
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
