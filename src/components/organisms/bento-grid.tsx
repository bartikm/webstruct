"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface BentoGridProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className={cn("bento-grid", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
