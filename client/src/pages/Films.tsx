import { useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { weddingStories } from "@/data/weddingData";
import { useTheme } from "@/context/ThemeContext";

export default function Films() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";
  const cardBg = theme === "dark" ? "bg-card" : "bg-white";
  const cardText = theme === "dark" ? "text-white" : "text-black";

  return (
    <PageTransition>
      <div className={`min-h-screen ${bgColor} pt-20 md:pt-32`}>
        {/* Hero */}
        <div className={`min-h-screen md:h-screen flex items-center justify-center border-b ${borderColor} px-4 md:px-0`}>
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className={`text-4xl md:text-9xl font-playfair font-light ${textColor} mb-6 uppercase`}
            >
              Our Films
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className={`text-base md:text-xl ${mutedColor} max-w-2xl mx-auto font-light px-4`}
            >
              Stories of love captured across continents
            </motion.p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={containerRef} className="py-12 md:py-32 px-4 md:px-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {weddingStories.map((story) => {
              const image = theme === "dark" ? story.imageDay : story.imageNight;
              
              return (
                <motion.div 
                  key={story.id} 
                  className="work-item group cursor-pointer overflow-hidden rounded-sm"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                  }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 md:h-96 overflow-hidden rounded-[10px]">
                    <img
                      src={image}
                      alt={story.coupleNames}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-opacity duration-300" />
                  </div>
                  
                  <div className={`p-6 md:p-8 ${cardBg} rounded-b-[10px]`}>
                    <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
                      {story.category}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-playfair font-light ${cardText} mt-3`}>
                      {story.coupleNames}
                    </h3>
                    <p className={`text-sm ${mutedColor} mt-2`}>
                      {story.location} • {story.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
