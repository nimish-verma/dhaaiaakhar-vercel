import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { portfolioItems } from "@/data/portfolioItems";

export default function ScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Map scroll progress to horizontal translation
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -portfolioItems.length * 600]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = Math.min(window.scrollY / totalScroll, 1);
          
          scrollYProgress.set(scrollProgress);

          // Calculate active index based on scroll position
          const activeIdx = Math.min(
            Math.floor(scrollProgress * portfolioItems.length),
            portfolioItems.length - 1
          );
          setActiveIndex(activeIdx);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  return (
    <div className="relative">
      {/* Scroll spacer */}
      <div className="h-[300vh] bg-noir-black" />

      {/* Sticky gallery container */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 right-0 h-screen bg-noir-black overflow-hidden flex items-center"
        style={{ zIndex: 40 }}
      >
        {/* Navigation & Title */}
        <div className="absolute top-8 left-8 right-8 z-50 flex items-center justify-between pointer-events-auto">
          <h2 className="text-2xl font-oswald font-bold text-noir-white uppercase tracking-wider">
            NOIR AGENCY
          </h2>
          <nav className="flex gap-8 text-sm font-inter text-noir-grey uppercase">
            <a href="#work" className="hover:text-noir-gold transition-colors">Work</a>
            <a href="#services" className="hover:text-noir-gold transition-colors">Services</a>
            <a href="#contact" className="hover:text-noir-gold transition-colors">Contact</a>
          </nav>
        </div>

        {/* Gallery */}
        <motion.div
          className="flex items-center gap-8 h-full px-20"
          style={{ x: xTranslate }}
        >
          {portfolioItems.map((item, index) => {
            const isCenter = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                className="relative flex-shrink-0 h-[600px] w-[600px] rounded-lg overflow-hidden cursor-pointer group"
                animate={{
                  scale: isCenter ? 1.2 : 0.85,
                  opacity: isCenter ? 1 : 0.4,
                  filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                  zIndex: isCenter ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

                {/* Project info - visible on center */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-8 left-8 right-8"
                  >
                    <span className="text-xs font-bold tracking-widest text-noir-gold uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-4xl font-oswald font-bold text-white uppercase mt-2">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-50 pointer-events-none">
          <div className="flex items-center gap-2">
            {portfolioItems.map((_, idx) => (
              <motion.div
                key={idx}
                className="h-1 bg-white/30 rounded-full"
                animate={{
                  width: idx === activeIndex ? 32 : 8,
                  backgroundColor: idx === activeIndex ? "#D4AF37" : "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <span className="text-xs text-noir-grey font-mono uppercase">
            {String(activeIndex + 1).padStart(2, "0")} / {String(portfolioItems.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
