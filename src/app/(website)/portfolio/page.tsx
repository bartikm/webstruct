import { PortfolioSection } from "@/components/organisms/portfolio-section";
import { Typography } from "@/components/atoms/typography";
import Link from "next/link";
import { client } from "@/sanity/client";
import { getPortfolioQuery, getCategoriesQuery } from "@/sanity/queries";

export const metadata = {
  title: "Portfolio | WebStruct",
  description: "Nasze wybrane realizacje tworzone z pasją w Next.js i Headless CMS.",
};

export default async function PortfolioPage() {
  let projects = [];
  let categories = [];
  
  try {
    const [projectsData, categoriesData] = await Promise.all([
      client.fetch(getPortfolioQuery, {}, { next: { revalidate: 60 } }),
      client.fetch(getCategoriesQuery, {}, { next: { revalidate: 60 } }),
    ]);
    projects = projectsData;
    categories = categoriesData;
  } catch (error) {
    console.warn("Błąd połączenia z Sanity.", error);
  }

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary/30 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-accent-cyan/5 blur-[150px] rounded-full" />
      </div>

      <main className="flex-1 pt-12 relative">
        <PortfolioSection initialProjects={projects} initialCategories={categories} />
      </main>

      <footer className="container mx-auto px-4 sm:px-12 py-16 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
           <span className="font-black text-2xl tracking-tighter">WebStruct<span className="text-primary">.</span></span>
           <p className="text-muted-foreground text-[10px] font-mono tracking-widest font-bold uppercase">© {new Date().getFullYear()} / PRECISI0N_MADE / BY_WEBSTRUCT</p>
        </div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Prywatność</Link>
          <Link href="/regulamin" className="hover:text-primary transition-colors">Regulamin</Link>
        </div>
      </footer>
    </div>
  );
}
