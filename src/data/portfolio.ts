export interface PortfolioItem {
  id?: number;
  _id?: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Platforma SaaS B2B",
    category: "SaaS",
    shortDescription: "Kompleksowy system zarządzania zespołem, integracja z Jira oraz dedykowany system raportowy.",
    image: "/og-image.jpg", // Tymczasowe zdjęcie dostępne w public
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"]
  },
  {
    id: 2,
    title: "Sklep E-Commerce",
    category: "E-Commerce",
    shortDescription: "Ultra-szybki sklep zbudowany w architekturze Headless, gwarantujący natychmiastowe ładowanie podstron.",
    image: "/og-image.jpg", 
    technologies: ["React", "Shopify", "Framer Motion", "GraphQL"]
  },
  {
    id: 3,
    title: "Aplikacja Finansowa",
    category: "Aplikacje Webowe",
    shortDescription: "Mobilny i webowy dashboard kryptowalutowy na żywo z potężnymi wykresami wektorowymi.",
    image: "/og-image.jpg", 
    technologies: ["Next.js", "WebSockets", "D3.js", "Node.js"]
  },
  {
    id: 4,
    title: "Firma Projektowo-Budowlana Szymon Szymura",
    category: "Biura architektoniczne",
    shortDescription: "Kompleksowa platforma dla śląskiej firmy budowlanej. Projektowanie architektoniczne, nadzór inwestorski i system wyceny online.",
    image: "/og-image.jpg", 
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"]
  }
];
