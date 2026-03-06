import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Rocket } from "lucide-react";

export const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <span className="text-9xl font-display font-bold text-gradient-cosmic">404</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Lost in Space
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved to another dimension.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-accent/30 transition-all"
          >
            <Rocket size={18} />
            View Projects
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30 blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-accent/20 blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-nebula-blue/20 blur-md"
          />
        </div>
      </div>
    </main>
  );
};
