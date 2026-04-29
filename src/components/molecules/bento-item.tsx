"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

interface BentoItemProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function BentoItem({ className, children, ...props }: BentoItemProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className={cn("bento-item flex flex-col gap-4", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
