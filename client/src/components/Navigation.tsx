import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 pointer-events-auto" style={{
        background: theme === "dark" 
          ? "linear-gradient(to bottom, rgba(26, 26, 26, 0.9) 0%, rgba(26, 26, 26, 0.5) 70%, rgba(26, 26, 26, 0) 100%)" 
          : "linear-gradient(to bottom, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 0.5) 70%, rgba(245, 245, 245, 0) 100%)",
        backdropFilter: "blur(2px)",
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
      }}>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl md:text-2xl font-playfair font-light uppercase tracking-[0.2em] hover:opacity-80 transition-opacity" style={{
            color: "#d4a5a5"
          }}>
            Dhaiaakar
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hidden md:block" // Hidden on mobile to avoid overcrowding header
            style={{
              backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: theme === "dark" ? "white" : "#1a1a1a"
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-xs font-inter uppercase tracking-widest" style={{
          color: theme === "dark" ? "white" : "#1a1a1a"
        }}>
          <Link to="/films" className="hover:opacity-70 transition-opacity">Films</Link>
          <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
          <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: theme === "dark" ? "white" : "#1a1a1a"
            }}
          >
             {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button 
            onClick={toggleMenu}
            className="p-1 focus:outline-none"
            style={{ color: theme === "dark" ? "white" : "#1a1a1a" }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-deep/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 pointer-events-auto"
            style={{ 
              backgroundColor: theme === "dark" ? "rgba(26,26,26,0.98)" : "rgba(245,245,245,0.98)"
            }}
          >
            <Link 
              to="/films" 
              onClick={toggleMenu}
              className="text-2xl font-playfair font-light uppercase tracking-widest"
              style={{ color: theme === "dark" ? "white" : "#1a1a1a" }}
            >
              Films
            </Link>
            <Link 
              to="/services" 
              onClick={toggleMenu}
              className="text-2xl font-playfair font-light uppercase tracking-widest"
              style={{ color: theme === "dark" ? "white" : "#1a1a1a" }}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMenu}
              className="text-2xl font-playfair font-light uppercase tracking-widest"
              style={{ color: theme === "dark" ? "white" : "#1a1a1a" }}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
