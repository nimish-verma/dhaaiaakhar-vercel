import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    if (!isVisible) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      delay: 0.5,
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    });
  }, { scope: containerRef });

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-noir-black text-noir-white"
    >
      <h1 
        ref={textRef} 
        className="text-6xl md:text-9xl font-oswald font-bold tracking-tighter opacity-0 uppercase"
      >
        Noir Agency
      </h1>
    </div>
  );
}
