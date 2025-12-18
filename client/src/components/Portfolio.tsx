import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

import img1 from "@assets/generated_images/abstract_architectural_geometry_dark_concrete.png";
import img2 from "@assets/generated_images/vintage_film_camera_lens_dark_gold.png";
import img3 from "@assets/generated_images/minimalist_dark_workspace_gold_pen.png";
import img4 from "@assets/generated_images/abstract_light_trails_dark_tunnel.png";

const projects = [
  {
    id: 1,
    title: "Urban Decay",
    category: "Architecture",
    image: img1,
    size: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Gold Standard",
    category: "Product",
    image: img2,
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Executive Suite",
    category: "Brand Identity",
    image: img3,
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Night Speed",
    category: "Automotive",
    image: img4,
    size: "md:col-span-3 md:row-span-1",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".portfolio-item");
    
    items.forEach((item: any) => {
      gsap.from(item, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-noir-black py-24 px-6 md:px-20">
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase text-white">
          Selected Works
        </h2>
        <span className="hidden md:block text-noir-grey font-inter text-sm tracking-widest uppercase">
          2024 — 2025
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={cn(
              "portfolio-item group relative overflow-hidden bg-neutral-900 cursor-pointer",
              project.size
            )}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="mb-2 block text-xs font-bold tracking-widest text-noir-gold uppercase">
                {project.category}
              </span>
              <h3 className="text-3xl font-oswald font-bold uppercase text-white">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
