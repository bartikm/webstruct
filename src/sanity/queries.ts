import { groq } from "next-sanity";

export const getPortfolioQuery = groq`
  *[_type == "portfolioItem"] | order(_createdAt desc) {
    _id,
    title,
    category,
    shortDescription,
    "image": image.asset->url,
    technologies,
    link
  }
`;
