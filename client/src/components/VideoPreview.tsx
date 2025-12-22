import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Play } from "lucide-react";
import { weddingStories } from "@/data/weddingData";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function VideoPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const topThree = weddingStories.slice(0, 3);

  useGSAP(() => {
    gsap.from(".video-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  return (
    <section ref={containerRef} className={`${bgColor} py-16 md:py-32 px-4 md:px-20 border-t ${borderColor}`}>
      <div className="mb-12 md:mb-24">
        <h2 className={`text-4xl md:text-8xl font-playfair font-light uppercase ${textColor} mb-4 md:mb-8`}>
          Featured Films
        </h2>
        <p className={`text-lg md:text-xl ${mutedColor} max-w-2xl font-light`}>
          Watch our most recent cinematic wedding stories
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        {topThree.map((story) => {
          const image = theme === "dark" ? story.imageDay : story.imageNight;
          
          return (
            <div
              key={story.id}
              className="video-card group relative overflow-hidden rounded-sm cursor-pointer h-64 md:h-96"
            >
              {/* Image */}
              <img
                src={image}
                alt={story.coupleNames}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-opacity duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  initial={{ opacity: 0.7, scale: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="relative z-20 rounded-full border border-white/50 p-4 md:p-5 hover:border-accent-rose hover:bg-accent-rose/20 transition-all"
                >
                  <Play className="h-6 md:h-8 w-6 md:w-8 text-white fill-white" />
                </motion.button>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
                  {story.category}
                </span>
                <h3 className="text-xl md:text-2xl font-playfair font-light text-white mt-2">
                  {story.coupleNames}
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  {story.location} • {story.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
