"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { Badge } from "@/components/atoms/badge";
import type { PortfolioItem } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const CardContent = (
    <div className={`group flex flex-col bg-muted/20 border border-border/40 rounded-none p-4 sm:p-6 overflow-hidden relative shadow-2xl hover:bg-muted/40 transition-all duration-500 backdrop-blur-3xl h-full ${item.link ? 'cursor-pointer hover:-translate-y-2' : 'hover:-translate-y-1'}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20 group-hover:border-primary/60 transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20 group-hover:border-primary/60 transition-colors" />

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] rounded-none overflow-hidden bg-muted/50 mb-8 border border-border/20">
        <Image
          src={item.image || "/og-image.jpg"}
          alt={item.title || "Projekt"}
          fill
          unoptimized={item.image?.includes("sanity.io")}
          className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* HUD Scanner Effect */}
        <motion.div 
          className="absolute inset-x-0 h-[1px] bg-primary/60 shadow-[0_0_15px_#6366f1] z-10 pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="absolute inset-0 bg-background/40 transition-opacity duration-700 group-hover:opacity-10" />
        
        {item.link && (
          <div className="absolute top-4 right-4 w-12 h-12 rounded-none bg-primary text-primary-foreground flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 backdrop-blur-sm shadow-2xl z-20">
            <ExternalLink className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-4 px-2">
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] font-black">{item.category || "Project"}</span>
          <h3 className="text-2xl font-black tracking-tighter uppercase transition-colors group-hover:text-primary leading-tight">
            {item.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 font-medium">
          {item.shortDescription}
        </p>
        
        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
          {item.technologies?.map((tech) => (
            <span key={tech} className="px-2 py-1 text-[9px] font-black uppercase tracking-widest bg-muted border border-border/50 text-muted-foreground group-hover:border-primary/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (item.link) {
    return (
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full group"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
