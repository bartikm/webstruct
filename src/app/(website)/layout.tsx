import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webstruct.vercel.app"),
  title: "WebStruct | Zaawansowana Architektura Web",
  description: "Gotowa do produkcji aplikacja Next.js demonstrująca zaawansowane wzorce UI/UX, zarządzanie stanem i wysoką wydajność.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Polska"],
  authors: [{ name: "Zespół WebStruct" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://webstruct.vercel.app/",
    title: "WebStruct | Zaawansowana Architektura Web",
    description: "Gotowa do produkcji aplikacja Next.js z architekturą Bento Grid.",
    siteName: "WebStruct",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebStruct Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebStruct",
    description: "Pokaz możliwości Next.js App Router",
  },
};

import { JsonLd } from "@/components/json-ld";
import { CookieConsent } from "@/components/cookie-consent";
import { TrackingScripts } from "@/components/tracking-scripts";
import { Navigation } from "@/components/organisms/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TrackingScripts />
          <Navigation />
          <JsonLd />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
