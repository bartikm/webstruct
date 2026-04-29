import Script from "next/script";

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WebStruct",
    applicationCategory: "WebApplication",
    about: "A production-ready Next.js application demonstrating advanced UI/UX patterns, state management, and robust performant systems.",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
