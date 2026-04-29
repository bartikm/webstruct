"use client";

import { motion, animate } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/atoms/button";
import { CyberAura } from "@/components/atoms/cyber-aura";
import { fadeUpVariant } from "@/lib/animations";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ContactForm = dynamic(() => import("@/components/organisms/contact-form").then(mod => mod.ContactForm), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-none border border-border" />,
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
  scale = 1,
  theme = "dark"
}: { 
  reverse?: boolean; 
  duration?: number; 
  opacity?: number;
  blur?: number;
  scale?: number;
  theme?: string;
}) => {
  return (
    <div 
      className="flex w-max overflow-hidden transition-all duration-700 hover:opacity-100 hover:filter-none"
      style={{ 
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        transform: `scale(${scale})`,
        mixBlendMode: theme === "dark" ? 'plus-lighter' : 'multiply'
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const targetPosition = contactSection.offsetTop;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        duration: 0.8,
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
        duration: 0.8,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary/30 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] bg-accent-cyan/5 blur-[150px] rounded-full" />
      </div>

      <main className="flex-1">
        {/* Hero Section - Asymmetrical & Bold */}
        <section className="relative container mx-auto px-4 sm:px-8 pt-32 pb-40 md:pt-48 md:pb-64">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUpVariant}
            className="flex flex-col items-start gap-16"
          >
            {/* Branding with CyberAura */}
            <div className="relative inline-block">
              <CyberAura />
              <Link href="/" className="relative z-10 block transition-all hover:tracking-widest duration-700">
                <span className="font-black text-6xl md:text-8xl tracking-tighter text-foreground">
                  WebStruct<span className="text-primary">.</span>
                </span>
              </Link>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-4 left-0 h-[1px] bg-primary/50" 
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 items-end w-full">
              <div className="lg:col-span-8">
                <motion.h1 
                  className="text-balance leading-[0.85] tracking-tighter cyber-text-gradient drop-shadow-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Architektura <br />
                  Cyfrowej <br />
                  Inteligencji.
                </motion.h1>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <motion.p 
                  className="text-muted-foreground text-lg md:text-xl font-medium border-l-[3px] border-primary pl-8 leading-relaxed max-w-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Studio inżynierii webowej, gdzie precyzja kodu spotyka się z progresywnym designem. Systemy, które ewoluują wraz z Twoim biznesem.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="rounded-none px-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-mono tracking-tighter uppercase relative group overflow-hidden"
                    onClick={scrollToContact}
                  >
                    <span className="relative z-10">[ Rozpocznij współpracę ]</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-none px-12 border-border hover:border-primary/50 text-foreground font-mono tracking-tighter uppercase" 
                    onClick={scrollToTech}
                  >
                    Nasze Technologie
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack - Scanner Visual */}
        <section id="tech-stack" className="container mx-auto px-4 sm:px-12 pt-32 pb-12 border-t border-border/10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 gap-8">
            <div>
              <h2 className="mb-6 uppercase italic tracking-tight font-black text-center">Nasze <span className="text-primary">Technologie</span></h2>
              <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                Budujemy w oparciu o najnowocześniejsze rozwiązania, które gwarantują błyskawiczne działanie, niezawodność oraz najwyższy poziom bezpieczeństwa Twojej strony.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">System Status: Optimal</span>
            </div>
          </div>

          <div 
            className="relative flex flex-col gap-4 py-20 rotate-[-1deg] mb-4 w-full overflow-hidden group/marquee bg-muted/20 border-y border-primary/10"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            {/* Scanning Line Effect */}
            <motion.div 
              className="absolute inset-y-0 w-[2px] bg-primary/40 shadow-[0_0_20px_#5c5fff] z-20 pointer-events-none"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex flex-col gap-12 group-hover/marquee:gap-16 transition-all duration-700">
              <LogoMarquee duration={80} opacity={0.15} blur={1} scale={0.9} theme={theme} />
              <LogoMarquee reverse duration={50} opacity={0.4} scale={1.2} theme={theme} />
              <LogoMarquee duration={110} opacity={0.1} blur={3} scale={0.8} theme={theme} />
            </div>
          </div>
        </section>

        {/* Contact Section - Industrial Terminal */}
        <section id="contact" className="container mx-auto px-4 sm:px-12 py-32 border-t border-border/20 relative">
          <div className="absolute top-0 right-12 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />
          
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12 lg:sticky lg:top-32">
              <div className="space-y-6">
                <span className="font-mono text-primary text-sm uppercase tracking-widest block font-bold">[ Skontaktuj się ]</span>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                  Stwórzmy <br />
                  <span className="text-primary italic">Twój Projekt.</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-md font-medium">
                Skorzystaj z formularza obok, aby wysłać nam zapytanie. Nasz zespół odezwie się w ciągu 24 godzin z gotową strategią wdrożenia.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-border/50">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest font-bold">Lokalizacja</span>
                  <p className="font-bold text-sm tracking-tight">Knurów, Polska</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest font-bold">E-mail</span>
                  <p className="font-bold text-sm tracking-tight hover:text-primary transition-colors cursor-pointer">hello@webstruct.pl</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Corner Accents for the Form */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
              
              <div className="bg-muted/40 p-8 sm:p-16 rounded-none border border-border/50 backdrop-blur-3xl relative shadow-[40px_40px_0px_rgba(92,95,255,0.03)] group transition-all duration-500 hover:shadow-[40px_40px_0px_rgba(92,95,255,0.06)]">
                <div className="mb-10 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                  </div>
                  <div className="h-[1px] flex-1 bg-border/50 mx-4" />
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold">New_Message.sys</span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-12 py-16 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
           <span className="font-black text-2xl tracking-tighter">WebStruct<span className="text-primary">.</span></span>
           <p className="text-muted-foreground text-[10px] font-mono tracking-widest font-bold uppercase">© 2026 / PRECISI0N_MADE / BY_WEBSTRUCT</p>
        </div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Prywatność</Link>
          <Link href="/regulamin" className="hover:text-primary transition-colors">Regulamin</Link>
        </div>
      </footer>
    </div>
  );
}
