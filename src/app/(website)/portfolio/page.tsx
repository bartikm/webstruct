import { PortfolioSection } from "@/components/organisms/portfolio-section";
import { Typography } from "@/components/atoms/typography";
import Link from "next/link";
import { client } from "@/sanity/client";
import { getPortfolioQuery } from "@/sanity/queries";

export const metadata = {
  title: "Portfolio | WebStruct",
  description: "Nasze wybrane realizacje tworzone z pasją w Next.js i Headless CMS.",
};

export default async function PortfolioPage() {
  // Pobieranie danych i ich cache'owanie przez 60 sekund (ISR)
  // W przypadku błędu (np. brak wpiętego sanity) serwujemy z rezerwą pustą tablicę lub łapiemy wyjątek
  let projects = [];
  try {
    projects = await client.fetch(getPortfolioQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn("Błąd połączenia z Sanity. Sprawdź konfigurację NEXT_PUBLIC_SANITY_PROJECT_ID.", error);
  }

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#05010a] bg-gradient-to-br from-[#07010d] via-[#240338] to-[#07010d] text-foreground selection:bg-primary/30">
      <main className="flex-1 pt-24">
        {/* Przekazanie do klienta pobranych na serwerze projektów */}
        <PortfolioSection initialProjects={projects} />
      </main>

      <footer className="container mx-auto px-4 sm:px-12 py-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <Typography variant="span" className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} WebStruct. Wszelkie prawa zastrzeżone.
        </Typography>
        <div className="flex gap-8 text-sm font-semibold text-muted-foreground">
          <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Polityka Prywatności</Link>
          <Link href="/regulamin" className="hover:text-primary transition-colors">Regulamin</Link>
        </div>
      </footer>
    </div>
  );
}
