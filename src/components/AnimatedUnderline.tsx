"use client";

import { motion } from "motion/react";

export default function AnimatedUnderline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="relative inline-block text-purple-400">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[5px] bg-purple-400 rounded-sm"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </span>
  );
}
