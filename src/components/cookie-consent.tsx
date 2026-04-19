"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { Settings, ShieldCheck, Info } from "lucide-react";
import Link from "next/link";

type ConsentChoices = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "webstruct-cookie-consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>({
    necessary: true, // Zawsze true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Sprawdzamy czy użytkownik wyraził już zgodę
    const timer = setTimeout(() => {
      const savedConsent = localStorage.getItem(CONSENT_KEY);
      if (!savedConsent) {
        setShowBanner(true);
      } else {
        try {
          const parsed = JSON.parse(savedConsent);
          setChoices(parsed);
        } catch {
          setShowBanner(true);
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (newChoices: ConsentChoices) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newChoices));
    setChoices(newChoices);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Opcjonalnie: Trigger event zeby GTM lub inne skrypty mogly zareagowac od razu
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleEssentialOnly = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(choices);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 drop-shadow-2xl sm:p-6"
      >
        <div className="mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-background/80 p-6 backdrop-blur-xl sm:p-8 flex flex-col gap-6 shadow-[0_0_40px_rgba(110,38,206,0.15)]">
          {!showPreferences ? (
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 space-y-2">
                <Typography variant="h3" className="flex items-center gap-2 text-xl font-semibold">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Zarządzanie prywatnością
                </Typography>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Używamy plików cookies, aby zapewnić prawidłowe działanie naszej witryny, personalizować treść i reklamy oraz analizować ruch. 
                  Możesz zaakceptować wszystkie pliki cookies lub dostosować swoje ustawienia. Więcej dowiesz się w naszej{" "}
                  <Link href="/polityka-prywatnosci" className="underline hover:text-primary transition-colors">
                    Polityce Prywatności
                  </Link>.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowPreferences(true)}
                  className="flex items-center gap-2 text-sm"
                >
                  <Settings className="h-4 w-4" />
                  Preferencje
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleEssentialOnly}
                  className="whitespace-nowrap"
                >
                  Tylko niezbędne
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="whitespace-nowrap px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                >
                  Akceptuję wszystkie
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <Typography variant="h3" className="text-xl font-semibold mb-2">
                  Preferencje plików cookies
                </Typography>
                <p className="text-sm text-muted-foreground">
                  Dostosuj i wybierz, w jaki sposób możemy wykorzystywać Twoje dane.
                </p>
              </div>

              <div className="space-y-4 rounded-xl border border-border/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-4 border-b border-border/10 pb-4">
                  <div className="space-y-1">
                    <Typography variant="span" className="font-medium flex items-center gap-2">
                      Niezbędne (Wymagane)
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Typography>
                    <p className="text-xs text-muted-foreground">
                      Te pliki cookies są konieczne do funkcjonowania strony i nie mogą zostać wyłączone. (np. zapisanie tych preferencji).
                    </p>
                  </div>
                  <div className="flex items-center h-5 mt-1">
                    <input type="checkbox" checked disabled className="accent-primary w-4 h-4 cursor-not-allowed opacity-50" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-border/10 pb-4">
                  <div className="space-y-1">
                    <Typography variant="span" className="font-medium flex items-center gap-2">
                      Analityczne
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Typography>
                    <p className="text-xs text-muted-foreground">
                      Pozwalają nam liczyć wizyty i źródła ruchu, dzięki czemu możemy mierzyć i poprawiać wydajność naszej witryny (np. Google Analytics 4).
                    </p>
                  </div>
                  <div className="flex items-center h-5 mt-1">
                    <input 
                      type="checkbox" 
                      id="opt-analytics"
                      checked={choices.analytics} 
                      onChange={(e) => setChoices(prev => ({ ...prev, analytics: e.target.checked }))}
                      className="accent-primary w-4 h-4 cursor-pointer" 
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <Typography variant="span" className="font-medium flex items-center gap-2">
                      Marketingowe
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Typography>
                    <p className="text-xs text-muted-foreground">
                      Używane do śledzenia odwiedzających na stronach internetowych. Ich celem jest wyświetlanie reklam, które są istotne dla danego użytkownika (np. Facebook Pixel).
                    </p>
                  </div>
                  <div className="flex items-center h-5 mt-1">
                    <input 
                      type="checkbox"
                      id="opt-marketing"
                      checked={choices.marketing} 
                      onChange={(e) => setChoices(prev => ({ ...prev, marketing: e.target.checked }))}
                      className="accent-primary w-4 h-4 cursor-pointer" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowPreferences(false)}
                >
                  Wróć
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleAcceptAll}
                >
                  Akceptuj wszystkie
                </Button>
                <Button 
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90"
                >
                  Zapisz preferencje
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
