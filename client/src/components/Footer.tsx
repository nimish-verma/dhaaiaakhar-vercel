import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  return (
    <footer ref={containerRef} className={`${bgColor} ${textColor} pt-32 pb-12 px-6 md:px-20 border-t ${borderColor}`}>
      <div className="flex flex-col items-center justify-center text-center mb-24">
        <p className={`mb-8 font-inter ${mutedColor} uppercase tracking-widest text-xs`}>
          Ready to tell your story?
        </p>
        <h2 className={`mb-12 text-6xl md:text-8xl font-playfair font-light uppercase`}>
          Dhaaiaakhar
        </h2>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className={`group relative overflow-hidden rounded-full border ${theme === "dark" ? "border-white/30" : "border-black/30"} bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer block`}>
            <span className={`relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light`}>Contact</span>
            <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </div>

      <div className={`mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs ${mutedColor} uppercase tracking-wider font-inter`}>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/dhaaiaakhar/" target="_blank" rel="noopener noreferrer" className={`hover:text-accent-rose transition-colors font-light`}>Instagram</a>
          <Link to="/contact" className={`hover:text-accent-rose transition-colors font-light`}>Contact</Link>
        </div>
        <p className="font-light">© 2025 Dhaaiaakhar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
