import { defineType, defineField } from "sanity";
import { HiOutlinePhotograph } from "react-icons/hi";
import getSanityImage from "@/utils/get-sanity-image";

export const gallery = defineType({
  title: "Gallery",
  name: "gallery",
  type: "document",
  icon: HiOutlinePhotograph,
  fields: [
    defineField({
      title: "Images",
      name: "imgs",
      type: "array",
      of: [
        defineField({
          title: "Image",
          name: "img",
          type: "document",
          fields: [
            defineField({
              title: "Source",
              name: "source",
              type: "image",
              validation: (r) => r.required(),
            }),
            defineField({
              title: "Name",
              name: "name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              title: "Description",
              name: "description",
              type: "text",
              validation: (r) => r.required(),
            }),
          ],
          validation: (r) => r.required(),
        }),
      ],
  
    }),
  ],
});
