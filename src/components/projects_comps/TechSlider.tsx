import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  // Cloud, 
  Terminal, 
  // Cpu, 
  GitBranch,
  Layers,
  Zap,
  // Globe,
  // Shield
} from "lucide-react";

const tools = [
  { name: "VS Code", icon: Code },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Layers },
  // { name: "AWS", icon: Cloud },
  { name: "MySQL", icon: Database },
  { name: "Terminal", icon: Terminal },
  // { name: "Kubernetes", icon: Cpu },
  { name: "Vercel", icon: Zap },
  // { name: "Cloudflare", icon: Globe },
  // { name: "Auth0", icon: Shield },
];

const TechSlider = () => {
  const doubledTools = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div 
        className="flex gap-6"
        animate={{ x: [0, -1200] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {doubledTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex-shrink-0 light-card px-5 py-3 rounded-md flex items-center gap-3 hover:border-primary/30 transition-all group"
          >
            <tool.icon size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSlider;
