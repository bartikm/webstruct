import { groq } from "next-sanity";

export const getPortfolioQuery = groq`
  *[_type == "portfolioItem"] | order(_createdAt desc) {
    _id,
    title,
    "category": category->title,
    shortDescription,
    "image": image.asset->url,
    technologies,
    link
  }
`;

export const getCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;
