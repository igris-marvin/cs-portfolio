import { motion } from "framer-motion";
import { ExternalLink, GitBranchIcon, Clock, Calendar } from "lucide-react";

export interface ProjectDetailsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration?: string;
  year?: string;
  date?: string;
  liveUrl?: string;
  githubUrl?: string;
  codeSnippet?: string;
}

interface ProjectCardProps {
  project: ProjectDetailsProps;
  index?: number;
  detailed?: boolean;
}

const ProjectCard = ({ project, index = 0, detailed = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group light-card rounded-lg overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Links Overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-amber transition-colors"
            >
              {/* sadad */}
              <GitBranchIcon size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-semibold group-hover:text-gradient-cosmic transition-all">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        {(project.duration || project.year || project.date) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {project.duration && (
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {project.duration}
              </span>
            )}
            {project.date ? (
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.date}
              </span>
            ) : project.year && (
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.year}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-sm bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Code Snippet for detailed view */}
        {detailed && project.codeSnippet && (
          <div className="mt-4 rounded-md bg-muted/50 p-4 overflow-x-auto border border-border">
            <pre className="text-xs text-muted-foreground">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
