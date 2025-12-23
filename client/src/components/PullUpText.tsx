import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PullUpText({ 
  children, 
  className,
  delay = 0 
}: { 
  children: string; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0, rotateX: -90 },
    show: { 
      y: "0%", 
      opacity: 1, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "circOut",
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden leading-tight py-2">
          {word.split("").map((char, j) => (
            <motion.span 
              key={j} 
              variants={item} 
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
