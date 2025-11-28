"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingWrapper({ children }) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  // Faster floating movement
  const randomMove = () => ({
    x: Math.random() * 40 - 20,
    y: Math.random() * 40 - 20,
    transition: { duration: 1.2, ease: "easeInOut" },
  });

  useEffect(() => {
    if (!hovered) {
      controls.start(async () => {
        while (true) await controls.start(randomMove());
      });
    }
  }, [hovered, controls]);

  // TILT EFFECT
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -18;
    const rotateY = ((x - rect.width / 2) / rect.width) * 18;

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      className="relative will-change-transform transition-all duration-200 rounded-4xl"
      animate={controls}
      onMouseEnter={() => {
        setHovered(true);
        setZIndex(50);
        controls.stop();
      }}
      onMouseLeave={() => {
        setHovered(false);
        setZIndex(0);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
      style={{
        zIndex,
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${hovered ? 1.05 : 1})`,
        filter: hovered ? "brightness(1.32)" : "brightness(1)",
        transition: "transform 0.12s ease, filter 0.2s ease, box-shadow 0.2s ease",

        // ⭐⭐⭐ Deep Dynamic Shadow
        boxShadow: hovered
          ? `
            0px 20px 40px rgba(0, 0, 0, 0.35),
            0px 8px 20px rgba(0, 0, 0, 0.25),
            0px 2px 5px rgba(0, 0, 0, 0.15)
          `
          : `
            0px 4px 10px rgba(0, 0, 0, 0.12)
          `,
      }}
    >
      {children}
    </motion.div>
  );
}
