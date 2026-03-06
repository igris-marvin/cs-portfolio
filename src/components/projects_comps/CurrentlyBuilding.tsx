import { motion } from "framer-motion";
import { Wrench, ExternalLink, Github } from "lucide-react";

const currentProjects = [
  {
    name: "Developer CLI Tool",
    description: "A command-line tool for automating common development workflows and project scaffolding.",
    progress: 75,
    tech: ["Rust", "CLI"],
    githubUrl: "#",
  },
  {
    name: "Open Source Component Library",
    description: "A collection of accessible, customizable React components with full TypeScript support.",
    progress: 40,
    tech: ["React", "TypeScript", "Storybook"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const CurrentlyBuilding = () => {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 mb-6">
          <Wrench size={16} className="text-accent" />
          <span className="text-sm text-muted-foreground">In Progress</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Currently <span className="text-gradient-cosmic">Building</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          What I'm actively working on right now. Check back for updates!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="light-card p-6 rounded-md hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display font-semibold text-lg">{project.name}</h3>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-primary">{project.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-sm bg-accent/10 text-accent border border-accent/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
