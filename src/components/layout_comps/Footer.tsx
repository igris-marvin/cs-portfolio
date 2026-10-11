import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/igris-marvin", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/peter-malope-a578242bb", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:mpmalope03@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-midnight text-white bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info & Socials */}
          <div className="space-y-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-md bg-linear-to-br from-primary to-accent flex items-center justify-center border border-pink-500">
                <span className="font-display font-bold text-xl text-pink-500">MP</span>
              </div>
              <span className="font-display font-semibold text-xl text-pink-500">
                <span className="text-gradient-cosmic">Peter Malope</span>
              </span>
            </Link>
{/*  */}
            <p className="max-w-md text-base text-midnight-foreground/70">
              Crafting digital experiences through code. Passionate about building
              innovative solutions that make a difference.
            </p>

            {/* Contact Details */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href="mailto:mpmalope03@gmail.com"
                className="flex items-center gap-3 text-midnight-foreground/70 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                <span>mpmalope03@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+27682938418"
                className="flex items-center gap-3 text-midnight-foreground/70 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                <span>+27 68 293 8418</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-midnight-foreground/70"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              >
                <MapPin size={18} />
                <span>Pretoria, Gauteng, South Africa</span>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-4 text-pink-500">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-midnight-foreground/70 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="font-display text-xl font-semibold text-pink-500">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/"
                  className="text-midnight-foreground/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="text-midnight-foreground/70 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/about"
                  className="text-midnight-foreground/70 hover:text-white transition-colors"
                >
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="text-midnight-foreground/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-midnight-foreground/60">
            © {currentYear} Peter Malope (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-midnight-foreground/60">
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
