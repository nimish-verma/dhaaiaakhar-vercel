import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
  };

  const bgColor = theme === "dark" ? "bg-bg-deep" : "bg-light-bg";
  const textColor = theme === "dark" ? "text-text-light" : "text-light-text";
  const mutedColor = theme === "dark" ? "text-text-muted" : "text-light-muted";
  const borderColor = theme === "dark" ? "border-white/30" : "border-black/30";

  return (
    <PageTransition>
      <div className={`min-h-screen ${bgColor} pt-32 md:pt-32`}>
        {/* Hero Section */}
        <div className="min-h-screen md:h-screen flex items-center justify-center px-4 md:px-0">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], type: "tween" }}
            >
              <h1 className={`text-4xl md:text-9xl font-playfair font-light ${textColor} mb-6 uppercase`}>
                Your Story
              </h1>
              <p className={`text-lg md:text-2xl ${mutedColor} font-light mb-12 md:mb-16`}>
                Dhaiaakar
              </p>
            </motion.div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8 px-4 md:px-0">
              {/* Inputs... */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full bg-white/5 border ${borderColor} px-4 py-3 rounded-[10px] ${textColor} placeholder-${mutedColor} focus:outline-none focus:border-accent-rose transition-colors font-light text-base md:text-lg`}
                  required
                />
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full bg-white/5 border ${borderColor} px-4 py-3 rounded-[10px] ${textColor} placeholder-${mutedColor} focus:outline-none focus:border-accent-rose transition-colors font-light text-base md:text-lg`}
                  required
                />
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
                 viewport={{ once: true }}
              >
                <input
                  type="date"
                  className={`w-full bg-white/5 border ${borderColor} px-4 py-3 rounded-[10px] ${textColor} placeholder-${mutedColor} focus:outline-none focus:border-accent-rose transition-colors font-light text-base md:text-lg`}
                  required
                />
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 viewport={{ once: true }}
              >
                <select className={`w-full bg-white/5 border ${borderColor} px-4 py-3 rounded-[10px] ${textColor} focus:outline-none focus:border-accent-rose transition-colors font-light text-base md:text-lg`}>
                  <option value="" disabled selected className="bg-bg-deep text-text-light">Select Budget Range</option>
                  <option value="1l-3l" className="bg-bg-deep text-text-light">₹1 Lakh - ₹3 Lakhs</option>
                  <option value="3l-5l" className="bg-bg-deep text-text-light">₹3 Lakhs - ₹5 Lakhs</option>
                  <option value="5l-10l" className="bg-bg-deep text-text-light">₹5 Lakhs - ₹10 Lakhs</option>
                  <option value="10l+" className="bg-bg-deep text-text-light">₹10 Lakhs+</option>
                </select>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 viewport={{ once: true }}
              >
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={5}
                  className={`w-full bg-white/5 border ${borderColor} px-4 py-3 rounded-[10px] ${textColor} placeholder-${mutedColor} focus:outline-none focus:border-accent-rose transition-colors font-light resize-none text-base md:text-lg`}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 md:mt-12 group relative overflow-hidden rounded-full border ${borderColor} bg-transparent px-8 md:px-12 py-3 md:py-4 text-base md:text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer`}
              >
                <span className={`relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light`}>
                  Send Inquiry
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </motion.button>
            </form>

            <div className={`mt-12 md:mt-16 pt-12 md:pt-16 border-t ${borderColor}`}>
              <p className={`text-xs md:text-sm ${mutedColor} uppercase tracking-widest font-light`}>
                Or reach out directly
              </p>
              <a href="mailto:hello@dhaiaakar.com" className="text-lg md:text-xl text-accent-rose hover:opacity-80 transition-opacity mt-4 block font-light mb-8">
                hello@dhaiaakar.com
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
