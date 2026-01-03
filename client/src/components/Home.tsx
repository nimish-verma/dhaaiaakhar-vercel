
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MapPin } from "lucide-react";

// Wedding Data structure with mixed media (Video & Image)
interface WeddingItem {
  id: number;
  couple: string;
  location: string;
  desc: string;
  src: string;
  type: "video" | "image";
}

const weddings: WeddingItem[] = [
  {
    id: 1,
    couple: "Aditi & Vihaan",
    location: "Udaipur, Rajasthan",
    desc: "A royal heritage celebration.",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920",
    type: "image",
  },
  {
    id: 2,
    couple: "Karan & Riya",
    location: "Mussoorie, Uttarakhand",
    desc: "Mountains, mist, and memories.",
    src: "https://videos.pexels.com/video-files/4324121/4324121-hd_1080_1920_30fps.mp4",
    type: "video",
  },
  {
    id: 3,
    couple: "Ishaan & Myra",
    location: "Goa, India",
    desc: "Sun, sand, and sacred vows.",
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1920",
    type: "image",
  },
  {
    id: 4,
    couple: "Arjun & Zara",
    location: "Jaipur, Rajasthan",
    desc: "Pink city, golden moments.",
    src: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80&w=1920",
    type: "image",
  },
  {
    id: 5,
    couple: "Siddharth & Ananya",
    location: "Kerala, India",
    desc: "Backwaters and new beginnings.",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1920",
    type: "image",
  },
  {
    id: 6,
    couple: "Vikram & Pooja",
    location: "Jodhpur, Rajasthan",
    desc: "Under the blue city sky.",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1920",
    type: "image",
  }
];

export default function CinematicHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  const activeWedding = weddings[activeSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* BACKGROUND LAYER - Animates physically from the thumbnail */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeWedding.id}
            layoutId={`video-container-${activeWedding.id}`}
            className="absolute inset-0 h-full w-full overflow-hidden"
            transition={{ 
                duration: 0.8, 
                ease: [0.32, 0.72, 0, 1] 
            }}
          >
            <motion.div 
                className="relative h-full w-full"
                initial={{ scale: 1.1 }} // subtle zoom effect on enter
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
            >
                {activeWedding.type === "video" ? (
                  <video
                      src={activeWedding.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover opacity-60"
                  />
                ) : (
                  <img
                      src={activeWedding.src}
                      alt={activeWedding.couple}
                      className="h-full w-full object-cover opacity-60"
                  />
                )}
                
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 grid h-full grid-cols-1 grid-rows-[1fr_auto] p-6 md:p-12 lg:grid-cols-[1fr_450px] lg:grid-rows-1 pointer-events-none">
        
        {/* MAIN TEXT (Bottom Left) */}
        <div className="flex flex-col justify-end pb-20 lg:pb-24 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWedding.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="pointer-events-auto"
            >
              <div className="flex items-center gap-2 text-sm md:text-base tracking-[0.2em] uppercase text-white/80 mb-4">
                <MapPin className="w-4 h-4 text-white" />
                <span>{activeWedding.location}</span>
                <span className="w-8 h-[1px] bg-white/50 inline-block ml-2"/>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] tracking-tight text-white mix-blend-overlay">
                {activeWedding.couple}
              </h1>
              
              <p className="mt-6 max-w-lg text-lg text-white/80 font-light leading-relaxed">
                {activeWedding.desc}
              </p>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 flex items-center gap-4 group cursor-pointer"
              >
                  <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-colors">
                      <Play className="h-4 w-4 fill-white text-white" />
                  </div>
                  <span className="uppercase tracking-widest text-sm font-medium">Watch Film</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAROUSEL (Bottom Right) */}
        <div className="flex flex-col justify-end lg:items-end lg:pb-12 pointer-events-none">
          <div className="pointer-events-auto flex gap-4 overflow-x-auto pb-4 pt-4 lg:pt-0 pl-1 no-scrollbar mask-gradient-r">
            {weddings.map((wedding, index) => {
              const isActive = index === activeSlide;
              
              // If active, we render a placeholder to keep layout stable but hide content
              // The `layoutId` logic handles the morphing from this position to the background
              if (isActive) {
                  return (
                      <div key={wedding.id} className="w-0 overflow-hidden transition-all duration-500 ease-in-out"></div>
                  )
              }

              return (
                <motion.div
                  key={wedding.id}
                  layoutId={`video-container-${wedding.id}`}
                  onMouseEnter={() => setActiveSlide(index)} // Interaction changed to HOVER
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="relative shrink-0 cursor-pointer overflow-hidden rounded-[4px] h-48 w-32 md:h-64 md:w-40 border border-white/20 shadow-2xl hover:border-white/60 transition-colors"
                >
                  {wedding.type === "video" ? (
                    <video
                      src={wedding.src}
                      muted
                      playsInline
                      loop
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => e.currentTarget.pause()}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={wedding.src}
                      alt={wedding.couple}
                      className="h-full w-full object-cover"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white truncate">
                      {wedding.couple}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Progress Indicators */}
          <div className="flex gap-2 mt-4 lg:pr-1 pointer-events-auto">
             {weddings.map((_, i) => (
                 <div 
                    key={i} 
                    onMouseEnter={() => setActiveSlide(i)} // Also hoverable
                    onClick={() => setActiveSlide(i)}
                    className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${i === activeSlide ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/60"}`}
                 />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
