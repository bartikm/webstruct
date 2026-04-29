import { defineType, defineField } from 'sanity';

export default defineType({
  name: "portfolioItem",
  title: "Projekt z Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł projektu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Krótki opis",
      type: "text",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "image",
      title: "Główne zdjęcie",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Użyte technologie",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link do projektu (Opcjonalny)",
      type: "url",
    }),
  ],
});
