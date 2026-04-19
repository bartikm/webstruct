"use client";

import { motion, animate } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/atoms/button";
import { fadeUpVariant } from "@/lib/animations";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const ContactForm = dynamic(() => import("@/components/organisms/contact-form").then(mod => mod.ContactForm), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-2xl" />,
});

const TECH_STACK = [
  {
    name: "React", logo: (
      <Image src="/react.png" alt="React" width={48} height={48} className="w-12 h-12 object-contain" />
    )
  },
  {
    name: "WordPress", logo: (
      <Image src="/wordpress.png" alt="WordPress" width={48} height={48} className="w-12 h-12 object-contain" />
    )
  },
  {
    name: "JavaScript", logo: (
      <Image src="/javascript.png" alt="JavaScript" width={48} height={48} className="w-12 h-12 object-contain" />
    )
  },
  {
    name: "PHP", logo: (
      <Image src="/php.png" alt="PHP" width={48} height={48} className="w-12 h-12 object-contain" />
    )
  },
  {
    name: "Next.js", logo: (
      <Image src="/next.svg" alt="Next.js" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />
    )
  },
];

const LogoMarquee = ({ 
  reverse = false, 
  duration = 40, 
  opacity = 0.2, 
  blur = 0,
  scale = 1
}: { 
  reverse?: boolean; 
  duration?: number; 
  opacity?: number;
  blur?: number;
  scale?: number;
}) => {
  return (
    <div 
      className="flex w-max overflow-hidden transition-all duration-700 hover:opacity-100 hover:filter-none"
      style={{ 
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        transform: `scale(${scale})`,
        mixBlendMode: 'plus-lighter'
      }}
    >
      <motion.div
        className="flex gap-16 md:gap-32 px-12 md:px-24"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex flex-col items-center gap-4 group min-w-[80px]"
          >
            <div className="relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {tech.logo}
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const targetPosition = contactSection.offsetTop;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        duration: 0.8, // Faster scrolling
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  const scrollToTech = () => {
    const techSection = document.getElementById("tech-stack");
    if (techSection) {
      const targetPosition = techSection.offsetTop;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        duration: 0.8, // Faster scrolling
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#05010a] bg-gradient-to-br from-[#07010d] via-[#240338] to-[#07010d] text-foreground selection:bg-primary/30">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-8 py-24 md:py-40 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUpVariant}
            className="max-w-4xl space-y-8 flex flex-col items-center"
          >
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95 mb-4">
              <span className="font-bold text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                WebStruct.
              </span>
            </Link>


            <Typography variant="h1" className="text-balance leading-[1.05] tracking-tighter">
              Projektujemy Przyszłość <span className="text-muted-foreground">Doświadczeń Cyfrowych.</span>
            </Typography>
            <Typography variant="p" className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Profesjonalna architektura WebStruct łączy w sobie estetykę Bento Grid, zaawansowane animacje i rygorystyczną optymalizację wydajności.
            </Typography>
            <div className="pt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10"
                onClick={scrollToContact}
              >
                Zabookuj rozmowę
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 border-primary/20" onClick={scrollToTech}>Czego używamy</Button>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Logos Section */}
        <section id="tech-stack" className="container mx-auto px-4 sm:px-12 pt-24 pb-8 border-t border-border/10 overflow-hidden">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Nasze Technologie</Typography>
            <Typography variant="p" className="text-muted-foreground max-w-2xl mx-auto">
              Pracujemy na najnowocześniejszych narzędziach, aby dostarczać produkty najwyższej jakości, które są szybkie, bezpieczne i skalowalne.
            </Typography>
          </div>

          <div 
            className="relative flex flex-col gap-4 py-12 rotate-[-2deg] mb-4 w-screen left-1/2 -ml-[50vw] overflow-hidden group/marquee"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)',
            }}
          >
            <div className="flex flex-col gap-12 group-hover/marquee:gap-16 transition-all duration-700">
              <LogoMarquee duration={80} opacity={0.15} blur={2} scale={0.9} />
              <LogoMarquee reverse duration={50} opacity={0.3} scale={1.1} />
              <LogoMarquee duration={110} opacity={0.1} blur={4} scale={0.8} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 sm:px-12 pt-16 pb-32 border-t border-border/20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <Typography variant="h2" className="text-4xl md:text-5xl tracking-tight">Porozmawiajmy o Twoim projekcie</Typography>
              <Typography variant="p" className="text-muted-foreground text-lg">
                Skorzystaj z formularza obok, aby wysłać nam zapytanie. Nasz zespół Full-Stack Developerów odezwie się w ciągu 24 godzin.
              </Typography>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center border border-border/50">📍</div>
                  <span>Knurów, Polska</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center border border-border/50">📧</div>
                  <span>hello@webstruct.pl</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 p-8 sm:p-12 rounded-[3.5rem] border border-border/30 backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-12 py-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <Typography variant="span" className="text-muted-foreground text-sm font-medium">
          © 2026 WebStruct. Wszelkie prawa zastrzeżone.
        </Typography>
        <div className="flex gap-8 text-sm font-semibold text-muted-foreground">
          <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Polityka Prywatności</Link>
          <Link href="/regulamin" className="hover:text-primary transition-colors">Regulamin</Link>
        </div>
      </footer>
    </div>
  );
}
