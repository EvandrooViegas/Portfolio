import { defineType, defineField, defineArrayMember } from "sanity";
import { AiOutlineVideoCamera } from "react-icons/ai";

export const videos = defineType({
  title: "Video",
  name: "video",
  type: "document",
  icon: AiOutlineVideoCamera,
  fields: [
    defineField({
      title: "Video Name",
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      title: "Video Link",
      name: "link",
      type: "url",
      validation: (r) => r.required(),
    }),
    defineField({
      title: "Video Banner",
      name: "banner",
      type: "image",
      validation: (r) => r.required(),
    }),
  ],
});
