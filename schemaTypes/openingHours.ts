import { defineType } from "sanity";

export default defineType({
  name: "openingHours",
  title: "Öffnungszeiten",
  type: "document",
  fields: [
    {
      name: "day",
      title: "Tag der Woche",
      type: "string",
      options: {
        list: [
          { title: "Montag", value: "Montag" },
          { title: "Dienstag", value: "Dienstag" },
          { title: "Mittwoch", value: "Mittwoch" },
          { title: "Donnerstag", value: "Donnerstag" },
          { title: "Freitag", value: "Freitag" },
          { title: "Samstag", value: "Samstag" },
          { title: "Sonntag", value: "Sonntag" },
        ],
      },
    },
    {
      name: "hours",
      title: "Öffnungszeiten",
      type: "string",
      description: "Beispiel: 12°°- 18°°",
    },
  ],
});
