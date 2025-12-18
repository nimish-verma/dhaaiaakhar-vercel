import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: "01", title: "Creative Direction", desc: "Vision & Strategy" },
  { id: "02", title: "Video Editing", desc: "Post-Production" },
  { id: "03", title: "Color Grading", desc: "Cinematic Look" },
  { id: "04", title: "Sound Design", desc: "Immersive Audio" },
  { id: "05", title: "Motion Graphics", desc: "Visual Effects" },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray(".service-row");
    
    gsap.from(rows, {
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
    <section ref={containerRef} className="bg-noir-black py-24 px-6 md:px-20">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase text-white mb-6">
          Our Expertise
        </h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="flex flex-col">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-row group relative flex items-center justify-between border-b border-white/10 py-12 transition-all duration-500 hover:border-noir-gold/50 hover:px-8 cursor-pointer"
          >
            <div className="flex items-baseline gap-8 md:gap-16">
              <span className="font-mono text-sm text-noir-grey group-hover:text-noir-gold transition-colors">
                /{service.id}
              </span>
              <h3 className="text-3xl md:text-5xl font-oswald font-medium uppercase text-white transition-colors group-hover:text-noir-gold">
                {service.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-sm font-light text-noir-grey group-hover:text-white transition-colors">
                {service.desc}
              </span>
              <ArrowUpRight className="h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 text-noir-gold" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
