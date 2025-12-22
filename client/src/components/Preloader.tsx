import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    if (!isVisible) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }
    });

    // Just fade out the preloader without any text
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep text-text-light"
    >
    </div>
  );
}
