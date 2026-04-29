"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slideInRightVariant } from "@/lib/animations";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/atoms/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      variants={slideInRightVariant}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsOpen(false)}>
          <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">WebStruct.</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-muted-foreground">
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/#tech-stack" className="hover:text-primary transition-colors">Technologie</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">Kontakt</Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="pl-4 border-l border-border/50 h-6 flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/10 bg-background/95 backdrop-blur-xl overflow-hidden shadow-2xl absolute left-0 right-0 top-full"
            >
              <nav className="flex flex-col p-8 gap-8 text-xl font-black uppercase tracking-tighter">
                <Link 
                  href="/portfolio" 
                  className="hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Portfolio</span>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  href="/#tech-stack" 
                  className="hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Technologie</span>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  href="/#contact" 
                  className="hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Kontakt</span>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
