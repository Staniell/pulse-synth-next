"use client";

import { motion } from "framer-motion";

export default function VisualizerDemo() {
  return (
    <div className="relative flex justify-center items-center py-6">
      {/* Simulated Audio Bars */}
      <div className="flex gap-1 items-end h-16 sm:h-24">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 sm:w-2 rounded-full bg-gradient-to-t from-neon-purple to-neon-cyan"
            animate={{
              height: ["20%", "80%", "40%", "90%", "30%"],
              opacity: [0.5, 1, 0.6, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            style={{
              minHeight: "10%",
            }}
          />
        ))}
      </div>

      {/* Ambient Glow behind */}
      <div className="absolute inset-0 bg-neon-purple/20 blur-[50px] -z-10 rounded-full opacity-50 pointer-events-none" />
    </div>
  );
}
