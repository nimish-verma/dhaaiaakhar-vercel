import { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const services = {
  weddings: [
    "Cinematic Wedding Films",
    "Candid Moments Capture",
    "Pre-Wedding Stories",
    "Highlight Reels",
    "Wedding Ceremonies",
    "Reception Cinematography",
  ],
  commercial: [
    "Brand Stories & Documentaries",
    "Editorial Photography",
    "Product Cinematography",
    "Corporate Events",
    "Promotional Films",
    "Social Media Content",
  ],
};

export default function OurCraft() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1] 
      }
    }
  };

  return (
    <section ref={containerRef} className={`${bgColor} py-32 px-6 md:px-20 border-t ${borderColor}`}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-24"
      >
        <motion.h2 
          variants={itemVariants}
          className={`text-6xl md:text-8xl font-playfair font-light uppercase ${textColor} mb-8`}
        >
          Our Craft
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className={`text-xl ${mutedColor} max-w-2xl font-light`}
        >
          We specialize in capturing moments that matter—whether it's the elegance of a wedding or the story of a brand.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Weddings */}
        <motion.div 
          className="craft-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className={`text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase`}>
            Specialization
          </motion.span>
          <motion.h3 variants={itemVariants} className={`text-4xl font-playfair font-light ${textColor} mt-4 mb-8`}>
            Weddings
          </motion.h3>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {services.weddings.map((service, idx) => (
              <motion.li 
                key={idx} 
                variants={itemVariants}
                className={`flex items-start gap-4 ${mutedColor}`}
              >
                <Check className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Commercial */}
        <motion.div 
          className="craft-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className={`text-xs font-inter font-semibold tracking-widest text-accent-gold uppercase`}>
            Specialization
          </motion.span>
          <motion.h3 variants={itemVariants} className={`text-4xl font-playfair font-light ${textColor} mt-4 mb-8`}>
            Commercial
          </motion.h3>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {services.commercial.map((service, idx) => (
              <motion.li 
                key={idx} 
                variants={itemVariants}
                className={`flex items-start gap-4 ${mutedColor}`}
              >
                <Check className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
