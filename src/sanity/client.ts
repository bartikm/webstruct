import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "twoj-kod",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-25", // dzisiejsza data (aby zablokować wersję API)
  useCdn: false, // Ustaw na false na czas developingu lub dla dynamicznych zapytań (np. App Router)
});
