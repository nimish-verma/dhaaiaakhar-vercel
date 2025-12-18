import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";

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

gsap.registerPlugin(ScrollTrigger);

export default function OurCraft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".craft-item", {
      y: 30,
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
    <section ref={containerRef} className="bg-bg-deep py-32 px-6 md:px-20 border-t border-white/10">
      <div className="mb-24">
        <h2 className="text-6xl md:text-8xl font-playfair font-light uppercase text-text-light mb-8">
          Our Craft
        </h2>
        <p className="text-xl text-text-muted max-w-2xl font-light">
          We specialize in capturing moments that matter—whether it's the elegance of a wedding or the story of a brand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Weddings */}
        <div className="craft-item">
          <span className="text-xs font-inter font-semibold tracking-widest text-accent-rose uppercase">
            Specialization
          </span>
          <h3 className="text-4xl font-playfair font-light text-text-light mt-4 mb-8">
            Weddings
          </h3>
          <ul className="space-y-4">
            {services.weddings.map((service, idx) => (
              <li key={idx} className="flex items-start gap-4 text-text-muted">
                <Check className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Commercial */}
        <div className="craft-item">
          <span className="text-xs font-inter font-semibold tracking-widest text-accent-gold uppercase">
            Specialization
          </span>
          <h3 className="text-4xl font-playfair font-light text-text-light mt-4 mb-8">
            Commercial
          </h3>
          <ul className="space-y-4">
            {services.commercial.map((service, idx) => (
              <li key={idx} className="flex items-start gap-4 text-text-muted">
                <Check className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
