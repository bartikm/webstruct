export default {
  name: "portfolioItem",
  title: "Projekt z Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł projektu",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategoria",
      type: "string",
      options: {
        list: [
          { title: "SaaS", value: "SaaS" },
          { title: "E-Commerce", value: "E-Commerce" },
          { title: "Aplikacje Webowe", value: "Aplikacje Webowe" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Krótki opis",
      type: "text",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "image",
      title: "Główne zdjęcie",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Użyte technologie",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link do projektu (Opcjonalny)",
      type: "url",
    },
  ],
};
