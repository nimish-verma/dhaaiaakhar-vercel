import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImg from "@assets/generated_images/cinematic_dark_moody_city_street_at_night.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      yPercent: -50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    
    // Initial animation
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 2.8, // Wait for preloader
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-noir-black"
    >
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src={heroImg} 
          alt="Cinematic City" 
          className="h-[120%] w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-transparent to-transparent opacity-90" />
      </div>

      <div 
        ref={textRef}
        className="relative z-10 flex h-full flex-col justify-end pb-32 px-6 md:px-20"
      >
        <h1 className="max-w-5xl text-7xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tight text-white mix-blend-difference">
          We Craft <br />
          <span className="text-noir-gold">Narratives</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg md:text-xl font-light text-gray-300">
          Premium visual storytelling for brands that dare to be different.
        </p>
      </div>
    </section>
  );
}
