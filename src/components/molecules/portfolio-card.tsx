"use client";

import Image from "next/image";
import { Typography } from "@/components/atoms/typography";
import { Badge } from "@/components/atoms/badge";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group flex flex-col bg-muted/40 border border-border/50 rounded-[2.5rem] p-4 sm:p-6 overflow-hidden relative shadow-2xl hover:bg-muted/60 transition-all duration-500 backdrop-blur-md hover:-translate-y-1">
      {/* Container na zdjęcie wewnątrz karty z zaokrąglonymi rogami mniejszymi niż główne */}
      <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-muted/50 mb-6 border border-border/20">
        <Image
          src={item.image || "/og-image.jpg"}
          alt={item.title || "Projekt"}
          fill
          unoptimized={item.image?.includes("sanity.io")}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
      </div>

      <div className="flex flex-col flex-1 gap-4 px-2">
        <Typography variant="h3" className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </Typography>
        <Typography variant="p" className="text-muted-foreground text-sm line-clamp-3">
          {item.shortDescription}
        </Typography>
        
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-background/50 border-border/50 text-xs text-muted-foreground group-hover:border-primary/30 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
