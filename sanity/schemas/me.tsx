import { defineType, defineField, defineArrayMember, validation } from "sanity";
import { BsPerson } from "react-icons/bs";
import { Icon } from "@iconify/react";

export const me = defineType({
  title: "Me",
  name: "me",
  type: "document",
  icon: BsPerson,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: r => r.required()
    }),
    defineField({
      title: "What do you do",
      name: "description",
      type: "text",
      validation: r => r.required()
    }),
    defineField({
      title: "Avatar",
      name: "avatar",
      type: "image",
      validation: r => r.required()
    }),
    defineField({
      title: "Skills",
      name: "skills",
      type: "array",
      validation: r => r.required(),
      of: [
        defineArrayMember({
          title: "Skill",
          name: "skill",
          type: "string",
          validation: r => r.required()
        }),
      ],
    }),
    defineField({
      title: "Slogan",
      name: "slogan",
      type: "string",
      validation: (r) =>
        r
          .min(3)
          .error("Slogan must be longer than 3 words")
    }),
    defineField({
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
    }),
    defineField({
      title: "Infos",
      name: "infos",
      type: "array",
      of: [
        defineArrayMember({
          title: "Info",
          name: "info",
          type: "document",
          fields: [
            defineField({
              title: "Name",
              name: "name",
              type: "string",
              validation: r => r.required()
            }),
            defineField({
              title: "Value",
              name: "value",
              type: "number",
              validation: r => r.required()
            })
          ]
        }),
      ],
      validation: r => r.required().custom((info: any) => {
        if(info.length !== 3) return 'Info size shall be 3'
        return true
      })
    }),
    defineField({
      title: "Testimonials",
      name: "testimonials",
      type: "array",
      of: [
        defineArrayMember({
          title: "Testimonial",
          name: "testimonial",
          type: "document",
          fields: [
            defineField({
              title: "Name",
              name: "name",
              type: "string",
              validation: r => r.required()
            }),
            defineField({
              title: "Message",
              name: "message",
              type: "string",
              validation: r => r.required()
            }),
            defineField({
              title: "Avatar",
              name: "avatar",
              type: "image",
              validation: r => r.required()
            }),
          ]
        }),
      ],
      validation: r => r.required().custom((info: any) => {
        if(info.length !== 3) return 'Testimonials size shall be 3'
        return true
      })
    }),

  ],
});
