import { motion } from "framer-motion";
import { Code2, Database, Wrench, Layout } from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient-cosmic">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="light-card rounded-lg p-6 group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-sm bg-muted/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Kotlin", "Java", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    icon: Layout,
    skills: ["React", "Node.js", "Express", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Oracle"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Postman", "VS Code", "Android Studio"],
  },
];

export default SkillsSection;
