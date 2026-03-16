import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "APT Detection using Graph Neural Networks",
    description: "Advanced Persistent Threat detection system leveraging graph neural networks to identify sophisticated cyber attacks in network traffic patterns.",
    tech: ["Python", "GNN", "PyTorch", "NetworkX", "TCGAT"],
    detail: "This project uses Graph Neural Networks to model network communications as graphs, enabling detection of subtle attack patterns that traditional methods miss. The system analyzes node relationships and temporal patterns to identify APT behaviors with high accuracy.",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning system for real-time fraud detection in financial transactions with high accuracy and low false positive rates.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    detail: "Built an ensemble model combining Random Forest, XGBoost, and neural networks to detect fraudulent transactions. Implemented SMOTE for handling class imbalance and achieved 99.2% accuracy on test data.",
  },
  {
    title: "Healthcare Recommendation System",
    description: "AI-powered system providing personalized healthcare recommendations based on patient data and medical history.",
    tech: ["Python", "ML", "NLP", "Flask"],
    detail: "Developed a recommendation engine that analyzes patient symptoms, medical history, and demographic data to suggest appropriate healthcare providers, treatments, and preventive measures using collaborative and content-based filtering.",
  },
  {
    title: "AI Career Guidance Chatbot",
    description: "Intelligent chatbot that provides personalized career guidance and skill recommendations for aspiring professionals.",
    tech: ["Python", "NLP", "TensorFlow", "React"],
    detail: "Created a conversational AI system that uses natural language processing to understand user queries about career paths, skill gaps, and industry trends, providing tailored guidance based on current market demands.",
  },
  {
    title: "Stock Portfolio Management System",
    description: "Data-driven portfolio management tool with predictive analytics and risk assessment capabilities.",
    tech: ["Python", "Pandas", "Matplotlib", "ML"],
    detail: "Built a comprehensive portfolio management system featuring stock price prediction using LSTM networks, risk analysis using Monte Carlo simulations, and automated portfolio rebalancing based on modern portfolio theory.",
  },
  {
    title: "Supply Chain Management System",
    description: "End-to-end supply chain optimization system using data analytics and predictive modeling.",
    tech: ["Python", "SQL", "Analytics", "ML"],
    detail: "Designed a system that optimizes inventory management, demand forecasting, and logistics routing using machine learning models, resulting in improved efficiency and reduced operational costs.",
  },
  {
    title: "Cognitive Virtual Assistant for Learning",
    description: "Personalized learning assistant that adapts to individual learning styles and progress patterns.",
    tech: ["Python", "NLP", "Deep Learning", "React", "LLM"],
    detail: "Developed an adaptive learning platform that uses cognitive computing to personalize educational content, track learning progress, and adjust difficulty levels based on individual student performance and learning patterns.",
  },
  {
    title: "Real-time Air Quality Monitoring",
    description: "IoT-based system for monitoring and predicting air quality indices using sensor data and machine learning.",
    tech: ["Python", "IoT", "ML", "Dashboard"],
    detail: "Created a real-time monitoring system that collects data from IoT sensors, processes it using machine learning models to predict AQI trends, and presents insights through an interactive dashboard with alerts for hazardous conditions.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Projects</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured <span className="gradient-text">work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                onClick={() => setSelected(i)}
                className="glass rounded-xl p-6 cursor-pointer hover:glow transition-all duration-300 group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-lg w-full glow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold pr-4">{projects[selected].title}</h3>
                <button onClick={() => setSelected(null)} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{projects[selected].detail}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  <Github size={16} /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
