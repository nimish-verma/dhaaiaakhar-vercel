import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { weddingStories } from "@/data/weddingData";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function Films() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useGSAP(() => {
    gsap.from(".work-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
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
  const cardBg = theme === "dark" ? "bg-card" : "bg-white";
  const cardText = theme === "dark" ? "text-white" : "text-black";

  return (
    <PageTransition>
      <div className={`min-h-screen ${bgColor} pt-20 md:pt-32`}>
        {/* Hero */}
        <div className={`min-h-screen md:h-screen flex items-center justify-center border-b ${borderColor} px-4 md:px-0`}>
          <div className="text-center">
            <h1 className={`text-4xl md:text-9xl font-playfair font-light ${textColor} mb-6 uppercase`}>
              Our Films
            </h1>
            <p className={`text-base md:text-xl ${mutedColor} max-w-2xl mx-auto font-light px-4`}>
              Stories of love captured across continents
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={containerRef} className="py-12 md:py-32 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {weddingStories.map((story) => {
              const image = theme === "dark" ? story.imageDay : story.imageNight;
              
              return (
                <div key={story.id} className="work-item group cursor-pointer overflow-hidden rounded-sm">
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <img
                      src={image}
                      alt={story.coupleNames}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-opacity duration-300" />
                  </div>
                  
                  <div className={`p-6 md:p-8 ${cardBg}`}>
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
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
