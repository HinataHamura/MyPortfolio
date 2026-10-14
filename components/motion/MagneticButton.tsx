"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.25;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
