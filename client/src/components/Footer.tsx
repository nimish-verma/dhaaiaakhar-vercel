import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

import { Link } from "react-router-dom";

import { motion, Variants } from "framer-motion";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  const popVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <footer ref={containerRef} className={`${bgColor} ${textColor} pt-32 pb-12 px-6 md:px-20 border-t ${borderColor}`}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col items-center justify-center text-center mb-24"
      >
        <motion.p 
          variants={popVariant}
          className={`mb-8 font-inter ${mutedColor} uppercase tracking-widest text-xs transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.6)] cursor-default`}
        >
          Ready to tell your story?
        </motion.p>
        <motion.h2 
          variants={popVariant}
          className={`mb-12 text-6xl md:text-8xl font-playfair font-light uppercase transition-all duration-300 hover:[text-shadow:0_0_15px_rgba(255,255,255,0.6)] cursor-default`}
        >
          Dhaaiaakhar
        </motion.h2>
        
        <motion.div 
          variants={popVariant}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className={`group relative overflow-hidden rounded-full border ${theme === "dark" ? "border-white/30" : "border-black/30"} bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer block`}>
            <span className={`relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light`}>Contact</span>
            <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={popVariant}
        className={`mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs ${mutedColor} uppercase tracking-wider font-inter`}
      >
        <div className="flex gap-6">
          <a href="https://www.instagram.com/dhaaiaakhar/" target="_blank" rel="noopener noreferrer" className={`hover:text-accent-rose transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)] font-light`}>Instagram</a>
          <Link to="/contact" className={`hover:text-accent-rose transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)] font-light`}>Contact</Link>
        </div>
        <p className="font-light transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)] cursor-default">© 2025 Dhaaiaakhar. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
}
