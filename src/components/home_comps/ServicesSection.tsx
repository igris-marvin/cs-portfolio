import { motion } from "framer-motion";
import { Code2, Database, Server, Smartphone, PieChart, Shield } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-gradient-cosmic">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise spanning the entire development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="light-card p-6 rounded-md group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Crafting responsive, performant interfaces with React, TypeScript, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable APIs and microservices with Node.js, Python, and cloud-native technologies.",
  },
  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description: "Designing intuitive user experiences with attention to accessibility and visual hierarchy.",
  // },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with React Native and responsive web apps.",
  },
  // {
  //   icon: Zap,
  //   title: "Performance Optimization",
  //   description: "Optimizing load times, bundle sizes, and runtime performance for lightning-fast experiences.",
  // },
  {
    icon: Shield,
    title: "DevOps & Security",
    description: "Implementing CI/CD pipelines, containerization, and security best practices.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "I can design and manage databases that store information efficiently and reliably using SQL and NoSQL databases."
  },
  {
    icon: PieChart,
    title: "Data Science & Analytics",
    description: "Working with data to discover patterns and insights that can solve real problems."
  }
];

export default ServicesSection;
