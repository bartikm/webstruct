"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { fadeUpVariant } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary/30">
      <main className="flex-1 container mx-auto px-4 sm:px-8 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95 mb-8">
              <span className="font-bold text-3xl tracking-tight text-foreground">
                WebStruct.
              </span>
            </Link>
            <Typography variant="h1" className="text-4xl md:text-5xl tracking-tighter">
              Regulamin Świadczenia Usług Drogą Elektroniczną
            </Typography>
            <Typography variant="p" className="text-muted-foreground text-lg italic">
              Ostatnia aktualizacja: 25 marca 2026
            </Typography>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">1. Postanowienia Wstępne i Administrator</Typography>
              <p>
                Niniejszy regulamin określa zasady korzystania z serwisu internetowego WebStruct, dostępnego pod adresem webstruct.pl, oraz zasady świadczenia usług drogą elektroniczną. Administratorem oraz usługodawcą jest <strong>WebStruct</strong> z siedzibą w Knurowie, Polska. Kontakt ze wsparciem: hello@webstruct.pl.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">2. Rodzaj i Zakres Świadczonych Usług</Typography>
              <p>
                WebStruct świadczy usługi polegające na udostępnianiu treści informacyjnych dotyczących usług programistycznych i doradczych oraz udostępnia formularz kontaktowy umożliwiający przesłanie zapytania. Usługi świadczone drogą elektroniczną podlegają Ustawie z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">3. Warunki Korzystania z Serwisu</Typography>
              <p>
                Korzystanie z serwisu wymaga urządzenia końcowego z dostępem do sieci Internet oraz standardowej przeglądarki internetowej. Użytkownik zobowiązany jest do korzystania z serwisu w sposób zgodny z prawem oraz dobrymi obyczajami. Zakazane jest dostarczanie przez Użytkownika treści o charakterze bezprawnym, obraźliwym lub złośliwym oprogramowaniu.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">4. Własność Intelektualna</Typography>
              <p>
                Wszelkie materiały udostępniane w serwisie, w tym teksty, grafiki, kod źródłowy, logo oraz układ, podlegają ochronie prawnoautorskiej i stanowią własność Usługodawcy lub podmiotów współpracujących. Wykorzystywanie ich, kopiowanie czy modyfikowanie bez wyraźnej zgody Usługodawcy jest zabronione.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">5. Procedura Reklamacyjna</Typography>
              <p>
                Użytkownicy mają prawo składać reklamacje w sprawach dotyczących usług świadczonych drogą elektroniczną przez Serwis. Reklamację należy zgłosić na adres e-mail: hello@webstruct.pl. Usługodawca rozpatrzy reklamację w terminie 14 dni roboczych od daty jej otrzymania. Odpowiedź w sprawie reklamacji jest wysyłana na adres e-mail Użytkownika.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">6. Odstąpienie od Umowy i Zmiany</Typography>
              <p>
                Umowa o świadczenie usług drogą elektroniczną (np. wysłanie formularza, przeglądanie strony) ma charakter bezpłatny i jednorazowy i ulega rozwiązaniu po opuszczeniu Serwisu. Ewentualne zmiany niniejszego regulaminu będą publikowane na stronie z odpowiednim wyprzedzeniem.
              </p>
            </section>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8 border-primary/20 w-fit">
                Powrót do strony głównej
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="container mx-auto px-4 sm:px-12 py-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <Typography variant="span" className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} WebStruct. Wszelkie prawa zastrzeżone.
        </Typography>
      </footer>
    </div>
  );
}
