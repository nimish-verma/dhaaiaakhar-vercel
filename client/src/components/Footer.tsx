import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={containerRef} className="bg-noir-black text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/10">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-8 font-inter text-noir-grey uppercase tracking-widest text-sm">
          Ready to start?
        </p>
        <h2 className="mb-12 text-6xl md:text-[10vw] font-oswald font-bold uppercase leading-none tracking-tighter">
          Let's Create
        </h2>
        
        <button className="group relative overflow-hidden rounded-full border border-white/20 bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-noir-gold hover:text-black cursor-pointer">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Contact Us</span>
          <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-noir-gold transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        </button>
      </div>

      <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-noir-grey uppercase tracking-wider font-inter">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>© 2025 Noir Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
