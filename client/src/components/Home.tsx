import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MapPin } from "lucide-react";

// Local Optimized Assets (WebP)
import udaipurBg from "../assets/images/home/udaipur.webp";
import udaipurThumb from "../assets/images/home/udaipur_thumb.webp";
import mussoorieBg from "../assets/images/home/mussoorie.webp";
import mussoorieThumb from "../assets/images/home/mussoorie_thumb.webp";
import goaBg from "../assets/images/home/goa.webp";
import goaThumb from "../assets/images/home/goa_thumb.webp";
import keralaBg from "../assets/images/home/kerala.webp";
import keralaThumb from "../assets/images/home/kerala_thumb.webp";

// Re-using assets to fill 6 slots as requested
import jaipurBg from "../assets/images/home/udaipur.webp";
import jaipurThumb from "../assets/images/home/udaipur_thumb.webp";
import jodhpurBg from "../assets/images/home/mussoorie.webp";
import jodhpurThumb from "../assets/images/home/mussoorie_thumb.webp";
import rishikeshBg from "../assets/images/home/kerala.webp";
import rishikeshThumb from "../assets/images/home/kerala_thumb.webp";
import agraBg from "../assets/images/home/goa.webp";
import agraThumb from "../assets/images/home/goa_thumb.webp";

interface WeddingItem {
  id: number;
  couple: string;
  location: string;
  desc: string;
  image: string;      
  thumbnail: string;  
}

const weddings: WeddingItem[] = [
  {
    id: 1,
    couple: "Aditi & Vihaan",
    location: "Udaipur, Rajasthan",
    desc: "A royal heritage celebration.",
    image: udaipurBg,
    thumbnail: udaipurThumb,
  },
  {
    id: 2,
    couple: "Karan & Riya",
    location: "Mussoorie, Uttarakhand",
    desc: "Mountains, mist, and memories.",
    image: mussoorieBg,
    thumbnail: mussoorieThumb,
  },
  {
    id: 3,
    couple: "Ishaan & Myra",
    location: "Goa, India",
    desc: "Sun, sand, and sacred vows.",
    image: goaBg,
    thumbnail: goaThumb,
  },
  {
    id: 4,
    couple: "Siddharth & Ananya",
    location: "Kerala, India",
    desc: "Backwaters and new beginnings.",
    image: keralaBg,
    thumbnail: keralaThumb, 
  },
   {
    id: 5,
    couple: "Arjun & Zara",
    location: "Jaipur, Rajasthan",
    desc: "Pink city, golden moments.",
    image: jaipurBg, 
    thumbnail: jaipurThumb,
  },
  {
    id: 6,
    couple: "Vikram & Pooja",
    location: "Jodhpur, Rajasthan",
    desc: "Under the blue city sky.",
    image: jodhpurBg, 
    thumbnail: jodhpurThumb,
  },
  {
    id: 7,
    couple: "Rohan & Meera",
    location: "Rishikesh, Uttarakhand",
    desc: "Ganga aarti and eternal promises.",
    image: rishikeshBg, 
    thumbnail: rishikeshThumb,
  },
  {
    id: 8,
    couple: "Kabir & Sanya",
    location: "Agra, Uttar Pradesh",
    desc: "Love in the shadow of the Taj.",
    image: agraBg, 
    thumbnail: agraThumb,
  },
  {
    id: 9,
    couple: "Arav & Nitya",
    location: "Udaipur, Rajasthan",
    desc: "Lakeside whispers of love.",
    image: udaipurBg, // Reusing
    thumbnail: udaipurThumb,
  },
  {
    id: 10,
    couple: "Dev & Diya",
    location: "Goa, India",
    desc: "Sunset horizons and joy.",
    image: goaBg, // Reusing
    thumbnail: goaThumb,
  }
];

// MEMOIZED CAROUSEL ITEM - Wrapper/Inner Architecture
const CarouselItem = memo(({ wedding, isActive, onClick, onHover, index }: { wedding: WeddingItem, isActive: boolean, onClick: () => void, onHover: () => void, index: number }) => {
  return (
    <motion.div
      layout // Wrapper handles Layout Position ONLY
      transition={{ duration: 0.8, ease: "easeInOut" }} // Calm slide
      className="relative shrink-0 h-40 w-28 md:h-56 md:w-36"
    >
      <motion.div
         // Inner handles visual Scale/Border ONLY
         onMouseEnter={onHover}
         onClick={onClick}
         animate={{ 
            opacity: isActive ? 1 : 0.6, 
            scale: isActive ? 1.05 : 0.95, // Scale happens inside, doesn't affect layout flow
            filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
            borderWidth: isActive ? 2 : 1,
            borderColor: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.1)',
         }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="w-full h-full rounded-[4px] overflow-hidden cursor-pointer shadow-2xl bg-black"
      >
        <img
          src={wedding.thumbnail}
          alt={wedding.couple}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          draggable="false" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <p className={`text-[10px] uppercase tracking-wider text-white truncate transition-opacity duration-300 ${isActive ? 'opacity-100 font-bold' : 'opacity-70'}`}>
            {wedding.couple}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default function CinematicHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Preload images into browser cache instantly
  useEffect(() => {
    weddings.forEach((w) => {
      const img = new Image();
      img.src = w.image;
    });
  }, []);

  // Auto-Play Logic - Calm & Fluid
  useEffect(() => {
    if (isHovering) return; // Pause on hover

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % weddings.length);
    }, 4000); // 4 seconds for a calm pace

    return () => clearInterval(interval);
  }, [isHovering]);

  const activeWedding = weddings[activeSlide];

  // Helper to get circular slice of 5 items starting from activeSlide
  const getVisibleWeddings = () => {
      return Array.from({ length: 5 }, (_, i) => {
          const index = (activeSlide + i) % weddings.length;
          return weddings[index];
      });
  };

  const visibleWeddings = getVisibleWeddings();

  // Swipe Handler
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setActiveSlide((prev) => (prev + 1) % weddings.length);
    } else if (info.offset.x > swipeThreshold) {
      setActiveSlide((prev) => (prev - 1 + weddings.length) % weddings.length);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans text-white">
      
      {/* 
          OPTIMIZED BACKGROUND STACK 
          Opacity toggle only. No mounting/unmounting.
      */}
      <div className="absolute inset-0 z-0">
        {weddings.map((wedding, index) => (
          <div 
            key={wedding.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-[1500ms] ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`absolute inset-0 transition-transform duration-[15000ms] ease-linear ${index === activeSlide ? 'scale-110' : 'scale-100'}`}>
                <img
                    src={wedding.image}
                    alt={wedding.couple}
                    className="h-full w-full object-cover opacity-60"
                    decoding="sync" 
                />
            </div>
            {/* Gradient Overlay attached to image container */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          </div>
        ))}
         {/* Noise Overlay */}
         <div className="absolute inset-0 z-20 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-30 grid h-full grid-cols-1 grid-rows-[1fr_auto] p-6 md:p-12 lg:grid-cols-[1fr_450px] lg:grid-rows-1 pointer-events-none">
        
        {/* MAIN TEXT */}
        <div className="flex flex-col justify-end pb-24 md:pb-28 lg:pb-32 pointer-events-none select-none z-50 max-w-xl xl:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWedding.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }} 
              className="pointer-events-auto"
            >
              <div className="flex items-center gap-3 text-sm md:text-base tracking-[0.2em] uppercase text-white/70 mb-4 md:mb-6">
                <MapPin className="w-4 h-4 text-accent-rose" />
                <span>{activeWedding.location}</span>
                <span className="w-12 h-[1px] bg-white/20 inline-block ml-2"/>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-white/90 drop-shadow-2xl">
                {activeWedding.couple}
              </h1>
              
              <p className="mt-6 md:mt-8 text-lg text-white/70 font-light leading-relaxed tracking-wide">
                {activeWedding.desc}
              </p>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 md:mt-12 flex items-center gap-4 group cursor-pointer"
              >
                  <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-all duration-300">
                      <Play className="h-5 w-5 fill-white text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="uppercase tracking-[0.2em] text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">Watch Film</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAROUSEL - REMOVED AnimatePresence to ensure exactly 5 items */}
        <div className="flex flex-col justify-end lg:items-end lg:pb-12 pointer-events-none z-40">
          <motion.div 
            className="pointer-events-auto flex gap-4 overflow-hidden pb-4 pt-12 pl-1 mask-gradient-r touch-pan-y"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
                {visibleWeddings.map((wedding, i) => (
                    <CarouselItem 
                        key={wedding.id}
                        wedding={wedding} 
                        isActive={wedding.id === activeWedding.id} 
                        onClick={() => setActiveSlide((weddings.indexOf(wedding)))} 
                        onHover={() => setActiveSlide((weddings.indexOf(wedding)))}
                        index={i} 
                    />
                ))}
          </motion.div>
          
          <div className="flex items-center justify-between mt-6 lg:ml-auto lg:pr-2 lg:w-full pointer-events-auto">
             {/* Progress Dots - Show all 10 to indicate total progress */}
             <div className="flex items-center gap-3 lg:ml-auto">
                {weddings.map((_, i) => (
                    <div 
                        key={i} 
                        onMouseEnter={() => setActiveSlide(i)}
                        className="group relative py-2 outline-none cursor-pointer" 
                    >
                        <div className={`
                            transition-all duration-300 rounded-full 
                            ${i === activeSlide ? "w-10 bg-white shadow-lg" : "w-2 bg-white/20 group-hover:bg-white/60"}
                            h-1
                        `} />
                    </div>
                ))}
             </div>
             
             {/* Styled Counter - Number Only as requested */}
             <div className="pl-6 flex items-baseline gap-2 text-white/90">
                 <span className="font-serif italic text-5xl leading-none">
                     {activeSlide + 1}
                 </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
