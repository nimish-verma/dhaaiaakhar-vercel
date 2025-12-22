import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { weddingStories } from "@/data/weddingData";
import { useTheme } from "@/context/ThemeContext";
import { Play } from "lucide-react";

export default function LoveStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  // Calculate total scroll distance needed for all 5 videos
  const totalVideos = weddingStories.length;
  const videoWidth = 580;
  const totalScrollDistance = totalVideos * videoWidth;

  // Map scroll progress to horizontal translation
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -totalScrollDistance]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = Math.min(window.scrollY / scrollHeight, 1);
          
          scrollYProgress.set(scrollProgress);

          // More granular calculation: divide scroll into equal sections for each video
          const sectionSize = 1 / totalVideos;
          let activeIdx = Math.floor(scrollProgress / sectionSize);
          
          // Ensure we stay within bounds
          activeIdx = Math.min(activeIdx, totalVideos - 1);
          activeIdx = Math.max(activeIdx, 0);
          
          setActiveIndex(activeIdx);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress, totalVideos]);

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const accentColor = theme === "dark" ? "#d4a5a5" : "#d4a5a5";

  return (
    <div className="relative">
      {/* Scroll spacer - increased to 700vh for better video distribution */}
      <div className={`h-[700vh] ${bgColor}`} />

      {/* Sticky gallery container */}
      <div
        ref={containerRef}
        className={`fixed top-0 left-0 right-0 h-screen ${bgColor} overflow-hidden flex items-center`}
        style={{ zIndex: 40 }}
      >
        {/* Tagline */}
        <div className="absolute top-28 left-8 right-8 z-50 text-center">
          <p className={`text-sm font-inter ${mutedColor} uppercase tracking-widest font-light`}>
            Two and a Half Letters of Love
          </p>
        </div>

        {/* Gallery */}
        <motion.div
          className="flex items-center gap-12 h-full px-20"
          style={{ x: xTranslate }}
        >
          {weddingStories.map((story, index) => {
            const isCenter = index === activeIndex;
            const isHovered = hoveredIndex === index;
            const image = theme === "dark" ? story.imageDay : story.imageNight;

            return (
              <motion.div
                key={story.id}
                className="relative flex-shrink-0 h-[500px] w-[500px] rounded-sm overflow-hidden cursor-pointer group"
                animate={{
                  scale: isCenter ? 1.15 : 0.85,
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={story.coupleNames}
                  className="h-full w-full object-cover transition-all duration-500"
                  style={{
                    filter: isHovered || isCenter ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  loading="lazy"
                />

                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                  style={{
                    opacity: isHovered || isCenter ? 0.2 : 0.4,
                  }}
                />

                {/* Project info - visible on center */}
                {(isCenter || isHovered) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
                      {story.category}
                    </span>
                    <h3 className="text-4xl font-playfair font-light text-white mt-2">
                      {story.coupleNames}
                    </h3>
                    <p className="text-xs text-white/70 mt-1">
                      {story.location} • {story.date}
                    </p>
                  </motion.div>
                )}

                {/* Play button - visible on center or hover */}
                {(isCenter || isHovered) && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full border border-white/50 p-3 hover:border-accent-rose hover:bg-accent-rose/10 transition-all"
                  >
                    <Play className="h-5 w-5 text-white fill-white" />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom indicators */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-50 pointer-events-none">
          <div className="flex items-center gap-2">
            {weddingStories.map((_, idx) => (
              <motion.div
                key={idx}
                className="h-1 rounded-full"
                animate={{
                  width: idx === activeIndex ? 40 : 8,
                  backgroundColor: idx === activeIndex ? accentColor : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
          <span className={`text-xs ${mutedColor} font-inter uppercase tracking-widest`}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(totalVideos).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
