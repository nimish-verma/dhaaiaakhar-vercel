import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import img1 from "@assets/generated_images/bride_portrait_elegant_wedding_dress.png";
import img2 from "@assets/generated_images/wedding_venue_setup_luxury_decoration.png";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"weddings" | "commercial">("weddings");
  const { theme } = useTheme();

  const weddingServices = [
    "Cinematic Wedding Films",
    "Candid Moments Capture",
    "Pre-Wedding Stories",
    "Highlight Reels",
    "Wedding Ceremonies",
    "Reception Cinematography",
  ];

  const commercialServices = [
    "Brand Stories & Documentaries",
    "Editorial Photography",
    "Product Cinematography",
    "Corporate Events",
    "Promotional Films",
    "Social Media Content",
  ];

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  return (
    <PageTransition>
      <div className={`min-h-screen ${bgColor} pt-20 md:pt-24`}>
        {/* Hero Section */}
        <div className={`min-h-screen md:h-screen flex items-center justify-center border-b ${borderColor} px-4 md:px-0`}>
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
              }}
              className={`text-4xl md:text-9xl font-playfair font-light ${textColor} mb-6 uppercase`}
            >
              Services
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
              }}
              className={`text-base md:text-xl ${mutedColor} max-w-2xl mx-auto font-light px-4`}
            >
              Dhaiaakar offers specialized cinematography for weddings and brands
            </motion.p>
          </motion.div>
        </div>

        {/* Split Screen Services - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Weddings */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group h-96 md:h-auto"
            onClick={() => setActiveTab("weddings")}
          >
            <img src={img1} alt="Weddings" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${activeTab === "weddings" ? "opacity-30" : "opacity-60"}`} />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-3xl md:text-5xl font-playfair font-light text-white mb-4 md:mb-6 uppercase"
              >
                Wedding
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="text-base md:text-xl text-white/80 mb-6 md:mb-8 font-light max-w-md"
              >
                The Love Story
              </motion.p>
              
              {activeTab === "weddings" && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`space-y-3 text-sm md:text-base ${mutedColor}`}
                >
                  {weddingServices.map((service, idx) => (
                    <li key={idx}>• {service}</li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group h-96 md:h-auto"
            onClick={() => setActiveTab("commercial")}
          >
            <img src={img2} alt="Commercial" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${activeTab === "commercial" ? "opacity-30" : "opacity-60"}`} />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-3xl md:text-5xl font-playfair font-light text-white mb-4 md:mb-6 uppercase"
              >
                Commercial
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="text-base md:text-xl text-white/80 mb-6 md:mb-8 font-light max-w-md"
              >
                The Brand Story
              </motion.p>
              
              {activeTab === "commercial" && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`space-y-3 text-sm md:text-base ${mutedColor}`}
                >
                  {commercialServices.map((service, idx) => (
                    <li key={idx}>• {service}</li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
