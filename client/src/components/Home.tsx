import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MapPin } from "lucide-react";

// Local Assets
import udaipurImg from "../assets/images/home/udaipur.png";
import mussoorieImg from "../assets/images/home/mussoorie.png";
import goaImg from "../assets/images/home/goa.png";
import keralaImg from "../assets/images/home/kerala.png";
// Re-using images for demo purposes to fill 6 slots
import udaipurImg2 from "../assets/images/home/udaipur.png";
import mussoorieImg2 from "../assets/images/home/mussoorie.png";

// Wedding Data structure: Video Removed, only Static High-Res Images
interface WeddingItem {
  id: number;
  couple: string;
  location: string;
  desc: string;
  image: string;
}

const weddings: WeddingItem[] = [
  {
    id: 1,
    couple: "Aditi & Vihaan",
    location: "Udaipur, Rajasthan",
    desc: "A royal heritage celebration.",
    image: udaipurImg,
  },
  {
    id: 2,
    couple: "Karan & Riya",
    location: "Mussoorie, Uttarakhand",
    desc: "Mountains, mist, and memories.",
    image: mussoorieImg,
  },
  {
    id: 3,
    couple: "Ishaan & Myra",
    location: "Goa, India",
    desc: "Sun, sand, and sacred vows.",
    image: goaImg,
  },
  {
    id: 4,
    couple: "Siddharth & Ananya",
    location: "Kerala, India",
    desc: "Backwaters and new beginnings.",
    image: keralaImg, 
  },
   {
    id: 5,
    couple: "Arjun & Zara",
    location: "Jaipur, Rajasthan",
    desc: "Pink city, golden moments.",
    image: udaipurImg2, // Reusing for consistent visual
  },
  {
    id: 6,
    couple: "Vikram & Pooja",
    location: "Jodhpur, Rajasthan",
    desc: "Under the blue city sky.",
    image: mussoorieImg2, // Reusing for consistent visual
  }
];

export default function CinematicHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  const activeWedding = weddings[activeSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* BACKGROUND LAYER - Crossfade Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeWedding.id}
            className="absolute inset-0 h-full w-full overflow-hidden"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }} // Slow Ken Burns effect
            exit={{ opacity: 0 }}
            transition={{ 
                opacity: { duration: 1.2, ease: "easeInOut" }, // Slower, smoother fade
                scale: { duration: 10, ease: "linear" } 
            }}
          >
            <img
                src={activeWedding.image}
                alt={activeWedding.couple}
                className="h-full w-full object-cover opacity-60"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
            
            {/* Optional Grain for cinematic feel */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 grid h-full grid-cols-1 grid-rows-[1fr_auto] p-6 md:p-12 lg:grid-cols-[1fr_450px] lg:grid-rows-1 pointer-events-none">
        
        {/* MAIN TEXT (Bottom Left) */}
        <div className="flex flex-col justify-end pb-24 md:pb-28 lg:pb-32 pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWedding.id}
              initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="pointer-events-auto"
            >
              <div className="flex items-center gap-3 text-sm md:text-base tracking-[0.2em] uppercase text-white/70 mb-6">
                <MapPin className="w-4 h-4 text-accent-rose" />
                <span>{activeWedding.location}</span>
                <span className="w-12 h-[1px] bg-white/20 inline-block ml-2"/>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.85] tracking-tight text-white/90 drop-shadow-2xl">
                {activeWedding.couple}
              </h1>
              
              <p className="mt-8 max-w-lg text-lg text-white/70 font-light leading-relaxed tracking-wide">
                {activeWedding.desc}
              </p>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 flex items-center gap-4 group cursor-pointer"
              >
                  <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-all duration-300">
                      <Play className="h-5 w-5 fill-white text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="uppercase tracking-[0.2em] text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">Watch Film</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAROUSEL (Bottom Right) */}
        <div className="flex flex-col justify-end lg:items-end lg:pb-12 pointer-events-none">
          {/* Card Slider */}
          <div className="pointer-events-auto flex gap-4 overflow-x-auto pb-4 pt-12 pl-1 no-scrollbar mask-gradient-r">
            {weddings.map((wedding, index) => {
              const isActive = index === activeSlide;
              
              return (
                <motion.div
                  key={wedding.id}
                  onMouseEnter={() => setActiveSlide(index)}
                  onClick={() => setActiveSlide(index)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0, scale: isActive ? 1.05 : 0.95, opacity: isActive ? 1 : 0.5 }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`
                    relative shrink-0 cursor-pointer overflow-hidden rounded-[4px] 
                    h-40 w-28 md:h-56 md:w-36 
                    transition-all duration-500
                    ${isActive ? 'border-2 border-white/80 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'border border-white/10 grayscale hover:grayscale-0'}
                  `}
                >
                  <img
                    src={wedding.image}
                    alt={wedding.couple}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className={`text-[10px] uppercase tracking-wider text-white truncate transition-all ${isActive ? 'opacity-100 font-bold' : 'opacity-70'}`}>
                      {wedding.couple}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-3 mt-6 lg:pr-2 pointer-events-auto">
             {weddings.map((_, i) => (
                 <motion.button 
                    key={i} 
                    onMouseEnter={() => setActiveSlide(i)}
                    onClick={() => setActiveSlide(i)}
                    className="group relative py-2 outline-none" // increase clickable area
                 >
                    <div className={`
                        transition-all duration-500 rounded-full 
                        ${i === activeSlide ? "w-10 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "w-2 bg-white/20 group-hover:bg-white/60"}
                        h-1
                    `} />
                 </motion.button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
