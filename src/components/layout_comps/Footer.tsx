import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/igris-marvin", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/peter-malope-a578242bb", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:mpmalope03@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-midnight text-white bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info & Socials */}
          <div className="space-y-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-xl text-pink-500">MP</span>
              </div>
              <span className="font-display font-semibold text-xl text-pink-500">
                <span className="text-gradient-cosmic">Peter Malope</span>
              </span>
            </Link>
{/*  */}
            <p className="text- max-w-md">
              Crafting digital experiences through code. Passionate about building 
              innovative solutions that make a difference.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href="mailto:mpmalope03@gmail.com"
                className="flex items-center gap-3 text-midnight-foreground/70 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>mpmalope03@gmail.com</span>
              </a>
              <a
                href="tel:+27682938418"
                className="flex items-center gap-3 text-midnight-foreground/70 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+27 68 293 8418</span>
              </a>
              <div className="flex items-center gap-3 text-midnight-foreground/70">
                <MapPin size={18} />
                <span>Pretoria, Gauteng, South Africa</span>
              </div>
            </div>

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
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-pink-500">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/" 
                className="text-midnight-foreground/70 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="text-midnight-foreground/70 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className="text-midnight-foreground/70 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-midnight-foreground/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
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
