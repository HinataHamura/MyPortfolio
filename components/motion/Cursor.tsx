"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    const id = requestAnimationFrame(() => setEnabled(true));
    function handleMove(event: MouseEvent) {
      x.set(event.clientX - 6);
      y.set(event.clientY - 6);
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-accent mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
}
