"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { PortfolioCard } from "@/components/molecules/portfolio-card";
import { CyberAura } from "@/components/atoms/cyber-aura";
import { fadeUpVariant } from "@/lib/animations";
import { useFilterStore } from "@/store/useFilterStore";

interface PortfolioSectionProps {
  initialProjects?: any[];
  initialCategories?: any[];
}

export function PortfolioSection({ initialProjects = [], initialCategories = [] }: PortfolioSectionProps) {
  const CATEGORIES = ["Wszystkie", ...initialCategories.map(c => c.title)];
  
  const { activeCategory, setCategory } = useFilterStore();
  const currentCategory = activeCategory === "All" || !activeCategory ? "Wszystkie" : activeCategory;

  const filteredData = initialProjects.filter((item: any) => 
    currentCategory === "Wszystkie" || item.category === currentCategory
  );

  return (
    <motion.section 
      id="portfolio" 
      initial="hidden"
      animate="show"
      variants={fadeUpVariant}
      className="container mx-auto px-4 sm:px-12 py-32"
    >
      <div className="mb-32 flex flex-col items-start text-left gap-16">
        <div className="relative inline-block">
          <CyberAura />
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] cyber-text-gradient drop-shadow-2xl">
            Wybrane <br /> Realizacje<span className="text-foreground">.</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-6 left-0 h-[1px] bg-primary/50" 
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end w-full">
          <div className="lg:col-span-12">
            <p className="text-muted-foreground text-lg md:text-xl font-medium border-l-[3px] border-primary pl-8 leading-relaxed max-w-3xl">
              Eksploruj architekturę systemów, w których precyzja inżynierii spotyka się z progresywnym designem. Każdy projekt to unikalna optymalizacja pod kątem UX i wydajności.
            </p>
          </div>
        </div>

        {/* Centered Filter Menu */}
        <div className="w-full flex justify-center pt-8">
          <div className="flex flex-wrap justify-center gap-1 bg-muted/30 p-1.5 rounded-none border border-border/40 backdrop-blur-3xl shadow-2xl">
            {CATEGORIES.map((cat) => {
              const isActive = currentCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat === "Wszystkie" ? "All" : cat)}
                  className={`relative px-6 py-3 rounded-none text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 whitespace-nowrap ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary rounded-none -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <motion.div layout className="bento-grid">
        <AnimatePresence mode="popLayout">
          {filteredData.map((project, i) => (
            <motion.div
              key={project._id || project.id || i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PortfolioCard item={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
