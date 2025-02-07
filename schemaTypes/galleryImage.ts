import { defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "caption",
      title: "Caption (optional)",
      type: "string",
    },
  ],
});
