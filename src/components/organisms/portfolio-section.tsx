"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { PortfolioCard } from "@/components/molecules/portfolio-card";
import { fadeUpVariant } from "@/lib/animations";
import { useFilterStore } from "@/store/useFilterStore";

const CATEGORIES = ["Wszystkie", "SaaS", "E-Commerce", "Aplikacje Webowe", "Biura Architektoniczne"];

interface PortfolioSectionProps {
  initialProjects?: any[];
}

export function PortfolioSection({ initialProjects = [] }: PortfolioSectionProps) {
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
      className="container mx-auto px-4 sm:px-12 py-24 border-t border-border/10"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <Typography variant="h2" className="mb-4">Wybrane Realizacje</Typography>
        <Typography variant="p" className="text-muted-foreground max-w-2xl mb-12">
          Zobacz nasze najnowsze projekty w których skupiliśmy się na potrójnym wektorze: UX, bezpieczeństwie oraz maksymalnej wydajności (Performance). 
        </Typography>

        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-muted/30 p-2 rounded-full border border-border/50">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat === "Wszystkie" ? "All" : cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </div>
      </div>

      <motion.div layout className="bento-grid">
        <AnimatePresence mode="popLayout">
          {filteredData.map((project, i) => (
            <motion.div
              key={project._id || project.id || i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <PortfolioCard item={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
