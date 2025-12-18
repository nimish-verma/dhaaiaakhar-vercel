import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { weddingStories } from "@/data/weddingData";

gsap.registerPlugin(ScrollTrigger);

export default function Films() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-deep pt-32">
        {/* Hero */}
        <div className="h-screen flex items-center justify-center border-b border-white/10">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-playfair font-light text-text-light mb-6 uppercase">
              Our Films
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-light">
              Stories of love captured across continents
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={containerRef} className="py-32 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {weddingStories.map((story) => (
              <div key={story.id} className="work-item group cursor-pointer overflow-hidden rounded-sm">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.coupleNames}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-opacity duration-300" />
                </div>
                
                <div className="p-8 bg-card">
                  <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
                    {story.category}
                  </span>
                  <h3 className="text-3xl font-playfair font-light text-white mt-3">
                    {story.coupleNames}
                  </h3>
                  <p className="text-sm text-text-muted mt-2">
                    {story.location} • {story.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
