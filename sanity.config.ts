import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { languageFilter } from "@sanity/language-filter";

export default defineConfig({
  name: "default",
  title: "himmelblauCMS",

  projectId: "oy7j0u07",
  dataset: "production",

  // prettier-ignore
  plugins: [
    structureTool(), 
    visionTool(), 
    languageFilter({
      supportedLanguages: [
          { id: 'de', title: 'Deutsch' },
          { id: 'en', title: 'English' },
      ],
      defaultLanguages: ['de'], // Set the default language(s) here
      documentTypes: ['navigation', 'openingHours', 'event', 'galleryImage'], // Apply filtering to these types
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
