import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FolderKanban, Home, Mail, Menu, UserRound, X } from "lucide-react";
import logoIcon from "../../assets/images/ico/android-chrome-512x512.png";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "About", path: "/about", icon: UserRound },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <div className="navbar-shell relative flex items-center justify-between px-3 py-2 sm:px-4">
          {/* Logo */}
          <Link to="/" className="group flex items-center" aria-label="Home">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className="navbar-logo flex h-14 w-14 items-center justify-center rounded-md"
            >
              <img src={logoIcon} alt="Portfolio logo" className="h-14 w-14 object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="ml-auto hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                    className={`navbar-link relative flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium ${
                    isActive ? "navbar-link-active text-pink-500" : "text-white hover:text-white"
                  }`}
                >
                  <Icon size={15} strokeWidth={1.8} />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="navbar-active-pill absolute inset-0 -z-0 rounded-md"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-menu-button flex h-10 w-10 items-center justify-center rounded-md text-pink-300 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="navbar-mobile-panel mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`navbar-mobile-link flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium ${
                        isActive ? "navbar-mobile-link-active text-white" : "text-white/65 hover:text-white"
                      }`}
                    >
                      <Icon size={17} />
                      <span>{link.name}</span>
                      {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-pink-400" />}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
