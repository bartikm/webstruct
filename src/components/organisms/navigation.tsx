"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInRightVariant } from "@/lib/animations";

export function Navigation() {
  return (
    <motion.header
      variants={slideInRightVariant}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">WebStruct.</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 md:gap-8 items-center text-[11px] sm:text-sm font-medium text-muted-foreground">
          <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/#tech-stack" className="hover:text-primary transition-colors">Technologie</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Kontakt</Link>
        </nav>
      </div>
    </motion.header>
  );
}
