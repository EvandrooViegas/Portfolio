import { defineArrayMember, defineField } from "sanity"
import { Icon } from "@iconify/react"
const social_medias = defineField({
    title: "Social Medias",
    name: "social_medias",
    type: "array",
    validation: r => r.required(),
    of: [
      defineArrayMember({
        title: "Social Media",
        name: "social_media",
        type: "document",
        fields: [
          defineField({
            title: "Social Media Name",
            name: "name",
            type: "string",
            validation: r => r.required()
          }),
          defineField({
            title: "Social Media Link",
            name: "link",
            type: "url",
            validation: r => r.required()
          }),
          defineField({
            title:
              "Social Media Icon code (Get them here: https://icon-sets.iconify.design/)",
            name: "icon",
            type: "string",
            validation: r => r.required()
          }),
        ],
        preview: {
          select: {
            media: "icon",
            title: "name",
          },
          prepare(ctx) {
            return { ...ctx, media: <Icon icon={ctx.media} /> };
          },
        },
      }),
    ],
  })
  export default social_medias