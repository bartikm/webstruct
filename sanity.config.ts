import { defineConfig } from 'sanity';
// Force Next.js Turbopack invalidation - v2
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'WebStruct Portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string || 'twoj-kod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string || 'production',

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
