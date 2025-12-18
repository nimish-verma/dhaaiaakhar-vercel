import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={containerRef} className="bg-bg-deep text-text-light pt-32 pb-12 px-6 md:px-20 border-t border-white/10">
      <div className="flex flex-col items-center justify-center text-center mb-24">
        <p className="mb-8 font-inter text-text-muted uppercase tracking-widest text-xs">
          Ready to tell your story?
        </p>
        <h2 className="mb-12 text-6xl md:text-8xl font-playfair font-light uppercase">
          Dhaiaakar
        </h2>
        
        <a href="mailto:hello@dhaiaakar.com" className="group relative overflow-hidden rounded-full border border-white/30 bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light">Contact</span>
          <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        </a>
      </div>

      <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-muted uppercase tracking-wider font-inter">
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent-rose transition-colors font-light">Instagram</a>
          <a href="#" className="hover:text-accent-rose transition-colors font-light">Vimeo</a>
          <a href="#" className="hover:text-accent-rose transition-colors font-light">Contact</a>
        </div>
        <p className="font-light">© 2025 Dhaiaakar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
