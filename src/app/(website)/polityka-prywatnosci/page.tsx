"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/atoms/typography";
import { fadeUpVariant } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#05010a] bg-gradient-to-br from-[#07010d] via-[#240338] to-[#07010d] text-foreground selection:bg-primary/30">
      <main className="flex-1 container mx-auto px-4 sm:px-8 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95 mb-8">
              <span className="font-bold text-3xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                WebStruct.
              </span>
            </Link>
            <Typography variant="h1" className="text-4xl md:text-5xl tracking-tighter">
              Polityka Prywatności i Plików Cookies
            </Typography>
            <Typography variant="p" className="text-muted-foreground text-lg italic">
              Ostatnia aktualizacja: 25 marca 2026
            </Typography>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">1. Informacje Ogólne</Typography>
              <p>
                Niniejsza Polityka Prywatności i Plików Cookies określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu WebStruct. Przestrzegamy Rozporządzenia o Ochronie Danych Osobowych (RODO / GDPR).
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">2. Administrator Danych Osobowych</Typography>
              <p>
                Administratorem danych osobowych Użytkowników zbieranych za pośrednictwem Serwisu jest <strong>WebStruct</strong>, z siedzibą w Knurowie, Polska. W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem: hello@webstruct.pl.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">3. Cel i Podstawa Przetwarzania Danych</Typography>
              <p>
                Twoje dane osobowe (np. imię, adres e-mail, treść wiadomości, adres IP) przetwarzane są w następujących celach:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Udzielenia odpowiedzi na zapytania z formularza kontaktowego (podstawa prawna: art. 6 ust. 1 lit. b i f RODO - podjęcie działań na żądanie osoby, której dane dotyczą, oraz prawnie uzasadniony interes).</li>
                <li>Zapewnienia prawidłowego działania strony – pliki cookies niezbędne (podstawa prawna: art. 6 ust. 1 lit. f RODO).</li>
                <li>Do celów analitycznych i statystycznych, mierzenia ruchu na stronie, tylko w przypadku wyrażenia zgody (podstawa prawna: art. 6 ust. 1 lit. a RODO).</li>
                <li>W celach marketingowych, np. poprzez narzędzia takie jak Facebook Pixel, wyłącznie w przypadku wyrażenia zgody (podstawa prawna: art. 6 ust. 1 lit. a RODO).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">4. Pliki Cookies (Ciasteczka)</Typography>
              <p>
                Nasz Serwis wykorzystuje mechanizm plików cookies. Pliki te są zapisywane w urządzeniu końcowym Użytkownika i służą do różnych celów. Obejmują one:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Cookies Niezbędne:</strong> (np. zapisanie preferencji co do samej zgody na cookies). Czas ich życia wynosi maksymalnie rok.</li>
                <li><strong>Cookies Analityczne (np. Google Analytics 4):</strong> Są instalowane wyłącznie, jeśli wyrazisz na nie zgodę. Posłużą nam do zbierania ogólnych i anonimowych danych statystycznych. Czas ich przechowywania zależy od narzędzia zewnętrznego, zwykle od kilku do 14 miesięcy.</li>
                <li><strong>Cookies Marketingowe (np. Facebook Pixel):</strong> Służą do dostarczenia spersonalizowanych treści reklamowych w zewnętrznych sieciach oraz mierzenia skuteczności reklam. Również instalowane wyłącznie na podstawie oddzielnej zgody. Ich czas przechowywania to zazwyczaj maksymalnie kilka miesięcy.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">5. Odbiorcy Danych</Typography>
              <p>
                W związku z korzystaniem z narzędzi analitycznych i marketingowych, dane mogą być przekazywane do podmiotów przetwarzających dane na zlecenie Administratora (m.in. Google Ireland Ltd., Meta Platforms Ireland Ltd.). Zapewniamy, że podmioty te stosują odpowiednie zabezpieczenia Danych Osobowych. Twoje dane nie są udostępniane innym podmiotom komercyjnym na własny użytek bez dodatkowej zgody.
              </p>
            </section>

            <section className="space-y-4">
              <Typography variant="h2" className="text-2xl text-foreground">6. Twoje Prawa (Prawo do bycia zapomnianym)</Typography>
              <p>
                Posiadasz następujące prawa wynikające z przepisów RODO:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prawo dostępu do swoich danych, ich sprostowania.</li>
                <li>Prawo do ich usunięcia (potocznie &quot;prawo do bycia zapomnianym&quot;).</li>
                <li>Prawo do ograniczenia przetwarzania oraz prawo do przenoszenia danych.</li>
                <li>W przypadku danych przetwarzanych na podstawie zgody (pliki cookies analityczne/marketingowe) - <strong>prawo odwołania zgody w każdym czasie</strong>. Można to zrobić klikając w ustawienia preferencji cookies u dołu strony, co spowoduje usunięcie dotychczasowych zgód z <code>localStorage</code> i zablokowanie ładowania skryptów przy kolejnych wizytach.</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
              </ul>
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
