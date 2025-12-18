import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import img1 from "@assets/generated_images/bride_portrait_elegant_wedding_dress.png";
import img2 from "@assets/generated_images/wedding_venue_setup_luxury_decoration.png";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"weddings" | "commercial">("weddings");

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

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-deep pt-24">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center border-b border-white/10">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-playfair font-light text-text-light mb-6 uppercase">
              Our Services
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-light">
              Tailored cinematography solutions for weddings and commercial projects
            </p>
          </div>
        </div>

        {/* Split Screen Services */}
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Weddings */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group"
            whileHover={{ x: activeTab === "weddings" ? 0 : 50 }}
            onClick={() => setActiveTab("weddings")}
          >
            <img src={img1} alt="Weddings" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${activeTab === "weddings" ? "opacity-30" : "opacity-60"}`} />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h2 className="text-5xl font-playfair font-light text-white mb-6 uppercase">
                Weddings
              </h2>
              <p className="text-xl text-white/80 mb-8 font-light max-w-md">
                Emotion, Narrative, Legacy
              </p>
              
              {activeTab === "weddings" && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 text-text-muted"
                >
                  {weddingServices.map((service, idx) => (
                    <li key={idx} className="text-sm">• {service}</li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group"
            whileHover={{ x: activeTab === "commercial" ? 0 : -50 }}
            onClick={() => setActiveTab("commercial")}
          >
            <img src={img2} alt="Commercial" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${activeTab === "commercial" ? "opacity-30" : "opacity-60"}`} />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h2 className="text-5xl font-playfair font-light text-white mb-6 uppercase">
                Commercial
              </h2>
              <p className="text-xl text-white/80 mb-8 font-light max-w-md">
                Precision, Brand, Impact
              </p>
              
              {activeTab === "commercial" && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 text-text-muted"
                >
                  {commercialServices.map((service, idx) => (
                    <li key={idx} className="text-sm">• {service}</li>
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
