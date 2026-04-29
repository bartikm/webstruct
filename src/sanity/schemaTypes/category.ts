import { defineType, defineField } from 'sanity';

export default defineType({
  name: "category",
  title: "Kategoria Projektu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa kategorii",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (identyfikator)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
