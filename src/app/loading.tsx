"use client"
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
export default function Loading() {
  const text = "LOADING LOADING LOADING";
  const characters = text.split("");
  const radius = 80;
  const fontSize = "18px";
  const letterSpacing = 14.5;
  const [scope, animate] = useAnimate();
  type AnimationStep = [
    string,
    { opacity: number },
    { duration: number; at: string }
  ];
  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: AnimationStep[] = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });

      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <div className="h-dvh w-screen	md:h-auto  relative md:mt-80 ">
      <motion.div ref={scope} className="circle" style={{ width: radius * 2 }}>
        <p aria-label={text} />
        <p aria-hidden="true" className="text">
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`letter letter-${i}`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
                fontSize,
              }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
