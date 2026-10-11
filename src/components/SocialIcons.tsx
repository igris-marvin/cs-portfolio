import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface SocialIconsProps {
  variant?: "hero" | "default" | "filled";
  size?: "sm" | "md" | "lg";
}

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/igris-marvin", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/peter-malope-a578242bb", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:mpmalope03@gmail.com", label: "Email" },
];

const SocialIcons = ({ variant = "default", size = "md" }: SocialIconsProps) => {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const variantClasses = {
    hero: "bg-pink-500/10 backdrop-blur-md border border-pink/20 text-pink-500 hover:bg-pink/20 hover:border-pink-500/40",
    default: "light-card hover:border-primary/30 text-muted-foreground hover:text-primary",
    filled: "bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30",
  };

  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`${sizeClasses[size]} rounded-md flex items-center justify-center transition-all ${variantClasses[variant]} border text-pink-500 border-pink-400 bg-pink-50`}
          aria-label={social.label}
        >
          <social.icon size={iconSizes[size]} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
