import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">About Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Passionate about building{" "}
              <span className="gradient-text">intelligent systems</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            I am an AI and Data Science student with a deep passion for leveraging data-driven
            approaches to solve real-world problems. My journey involves exploring machine learning
            algorithms, building predictive models, and creating systems that transform raw data
            into actionable insights. I thrive at the intersection of technology and innovation,
            constantly seeking opportunities to apply cutting-edge AI techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1">Education</p>
                <p className="text-sm text-muted-foreground">B.Tech in AI & Data Science</p>
                <p className="text-xs text-muted-foreground/70">Karunya Institute · 2026</p>
              </div>
            </div>
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1">Location</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-medium text-sm mb-1">Focus Areas</p>
                <p className="text-sm text-muted-foreground">ML · Data Science · AI Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
