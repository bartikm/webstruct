"use client";

import { motion } from "framer-motion";

export function CyberAura() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-visible select-none">
      {/* Deep Primary Background Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Rotating Cyan Ring */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border-[0.5px] border-accent-cyan/40 blur-[1px]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing Purple Aura */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[60px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fast Inner Particles (Simulated with rotating dots) */}
      <motion.div
        className="absolute w-[200px] h-[200px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_10px_#00d2ff]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-purple rounded-full shadow-[0_0_10px_#9d50bb]" />
      </motion.div>
    </div>
  );
}
