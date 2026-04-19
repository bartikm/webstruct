"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "webstruct-cookie-consent";

// Przykładowe ID, można wymienić na props lub env w przyszłości
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
const FB_PIXEL_ID = "XXXXXXXXXXXXXXX";

export function TrackingScripts() {
  const [consent, setConsent] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Odczytujemy stan zgód na start (oraz nasłuchujemy eventów z bannera)
    const updateConsent = () => {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (saved) {
        try {
          setConsent(JSON.parse(saved));
        } catch {
          // Ignoruj błędy parsowania
        }
      }
    };

    updateConsent();

    // Nasłuchiwanie na niestandardowe zdarzenie z komponentu CookieConsent
    window.addEventListener('cookie-consent-updated', updateConsent);
    return () => window.removeEventListener('cookie-consent-updated', updateConsent);
  }, []);

  return (
    <>
      {/* 
        =============================================
        GOOGLE ANALYTICS 4 (Analityczne)
        ============================================= 
      */}
      {consent.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* 
        =============================================
        FACEBOOK PIXEL (Marketingowe)
        ============================================= 
      */}
      {consent.marketing && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
