import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { weddingStories } from "@/data/weddingData";
import { useTheme } from "@/context/ThemeContext";
import { Play } from "lucide-react";

export default function LoveStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const [spacerHeight, setSpacerHeight] = useState(2000);
  const { theme } = useTheme();

  const [hasVerticalSpace, setHasVerticalSpace] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Vertical space check
      const imageTop = window.innerHeight / 2 - 250;
      setHasVerticalSpace(imageTop > 150);

      // Horizontal scroll calculation
      if (galleryRef.current) {
        // Calculate the total scrollable width
        const scrollWidth = galleryRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Distance needed to scroll to see the very end of content
        const distance = Math.max(0, scrollWidth - windowWidth);
        
        setMaxScroll(distance);
        setSpacerHeight(distance + window.innerHeight);
      }
    };

    // Need a small delay to ensure DOM is ready and layout is stable
    const timeout = setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  // Soften the scroll physics
  const springConfig = { mass: 0.8, stiffness: 90, damping: 20 };
  const smoothScrollY = useSpring(scrollY, springConfig);

  // Map pixels scrolled to pixels translated horizontally
  const xTranslate = useTransform(smoothScrollY, [0, maxScroll || 1], [0, -(maxScroll || 0)]);

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";

  if (isMobile) {
    return (
      <div className={`relative ${bgColor}`}>
        <div className={`h-screen ${bgColor} flex flex-col justify-center`}>
          <div className="px-4 mb-4">
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className={`text-xs font-inter ${mutedColor} uppercase tracking-widest font-light mb-2`}
             >
              Two and a Half Letters of Love
            </motion.p>
          </div>
          
           {/* Mobile Snap Scroll Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 no-scrollbar touch-pan-x"
          >
            {weddingStories.map((story) => {
              const image = theme === "dark" ? story.imageDay : story.imageNight;
              return (
                <div
                  key={story.id}
                  className="snap-center shrink-0 w-[85vw] relative aspect-[4/5] rounded-[10px] overflow-hidden"
                >
                  <img
                    src={image}
                    alt={story.coupleNames}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
                       {story.category}
                    </span>
                    <h3 className="text-2xl font-playfair font-light text-white mt-1">
                      {story.coupleNames}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
           <div className="px-4 text-center mt-2">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.6 }}
               className={`text-[10px] ${mutedColor} font-inter uppercase tracking-widest`}
             >
              Swipe to explore
            </motion.span>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Scroll spacer - allows scrolling beyond gallery */}
      <div style={{ height: `${spacerHeight}px` }} className={`${bgColor}`} />

      {/* Sticky gallery container */}
      <div
        ref={containerRef}
        className={`fixed top-0 left-0 right-0 h-screen ${bgColor} overflow-hidden flex items-center`}
        style={{ zIndex: 40 }}
      >
        {/* Tagline */}
        <motion.div 
          className="absolute top-28 left-8 right-8 z-50 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: hoveredIndex === null && hasVerticalSpace ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className={`text-sm font-inter ${mutedColor} uppercase tracking-widest font-light`}>
            Two and a Half Letters of Love
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          ref={galleryRef}
          className="flex items-center gap-12 h-full px-20"
          style={{ x: xTranslate }}
        >
          {weddingStories.map((story, index) => {
            const isHovered = hoveredIndex === index;
            const image = theme === "dark" ? story.imageDay : story.imageNight;

            return (
              <motion.div
                key={story.id}
                className="relative flex-shrink-0 h-[500px] w-[500px] rounded-[10px] overflow-hidden group"
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  opacity: 1,
                  zIndex: isHovered ? 10 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={story.coupleNames}
                  className="h-full w-full object-cover transition-all duration-500"
                  style={{
                    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  loading="lazy"
                />

                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 0.2 : 0.4,
                  }}
                />

                {/* Project info - visible only on hover */}
                {isHovered && (
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

                {/* Play button - visible only on hover */}
                {isHovered && (
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
          <div className="flex items-center gap-2 pointer-events-auto">
            {weddingStories.map((_, idx) => (
              <Indicator 
                key={idx}
                scrollY={smoothScrollY}
                index={idx}
                total={weddingStories.length}
                maxScroll={maxScroll}
                theme={theme}
              />
            ))}
          </div>
          <span className={`text-xs ${mutedColor} font-inter uppercase tracking-widest`}>
            Scroll to explore
          </span>
        </div>
      </div>
    </div>
  );
}

function Indicator({ scrollY, index, total, maxScroll, theme }: { scrollY: any, index: number, total: number, maxScroll: number, theme: string }) {
  const step = (maxScroll || 1) / Math.max(1, total - 1);
  const target = index * step;
  
  const width = useTransform(
    scrollY,
    [target - step, target, target + step],
    [8, 32, 8],
    { clamp: true }
  );
  
  const opacity = useTransform(
    scrollY,
    [target - step, target, target + step],
    [0.3, 1, 0.3],
    { clamp: true }
  );

  const activeColor = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const inactiveColor = theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(26, 26, 26, 0.3)";
  
  const backgroundColor = useTransform(
    scrollY,
    [target - step, target, target + step],
    [inactiveColor, activeColor, inactiveColor],
    { clamp: true }
  );

  return (
    <motion.div
      style={{
        width,
        backgroundColor,
      }}
      className="h-1 rounded-full cursor-pointer hover:h-1.5 transition-[height]"
      onClick={() => {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }}
    />
  );
}
