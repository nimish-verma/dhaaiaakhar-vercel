import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

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
  const focusBorderColor = theme === "dark" ? "focus:border-accent-rose" : "focus:border-accent-rose";
  const placeholderColor = theme === "dark" ? "placeholder-text-muted" : "placeholder-light-muted";
  const inputBg = theme === "dark" ? "bg-transparent" : "bg-transparent";

  return (
    <PageTransition>
      <div className={`min-h-screen ${bgColor} pt-32`}>
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h1 className={`text-6xl md:text-8xl font-playfair font-light ${textColor} mb-4 uppercase`}>
              Let's Tell Your Story
            </h1>
            <p className={`text-2xl ${mutedColor} font-light mb-16`}>
              Dhaiaakar
            </p>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full ${inputBg} border-b ${borderColor} pb-3 ${textColor} ${placeholderColor} ${focusBorderColor} transition-colors font-light focus:outline-none`}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full ${inputBg} border-b ${borderColor} pb-3 ${textColor} ${placeholderColor} ${focusBorderColor} transition-colors font-light focus:outline-none`}
                  required
                />
              </div>

              <div>
                <input
                  type="date"
                  className={`w-full ${inputBg} border-b ${borderColor} pb-3 ${textColor} ${placeholderColor} ${focusBorderColor} transition-colors font-light focus:outline-none`}
                  required
                />
              </div>

              <div>
                <select className={`w-full ${inputBg} border-b ${borderColor} pb-3 ${textColor} ${focusBorderColor} transition-colors font-light focus:outline-none`}>
                  <option value="" disabled selected>Select Budget Range</option>
                  <option value="under-5k">Under $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k+">$25k+</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={5}
                  className={`w-full ${inputBg} border-b ${borderColor} pb-3 ${textColor} ${placeholderColor} ${focusBorderColor} transition-colors font-light resize-none focus:outline-none`}
                />
              </div>

              <button
                type="submit"
                className={`mt-12 group relative overflow-hidden rounded-full border ${borderColor} bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer`}
              >
                <span className={`relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light ${textColor}`}>
                  Send Inquiry
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </button>
            </form>

            <div className={`mt-16 pt-16 border-t ${borderColor}`}>
              <p className={`text-sm ${mutedColor} uppercase tracking-widest font-light`}>
                Or reach out directly
              </p>
              <a href="mailto:hello@dhaiaakar.com" className="text-xl text-accent-rose hover:opacity-80 transition-opacity mt-4 block font-light">
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
