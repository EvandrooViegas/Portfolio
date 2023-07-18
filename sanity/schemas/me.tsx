import { defineType, defineField, defineArrayMember } from "sanity";
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
      type: "string"
    }),
    defineField({
      title: "Avatar",
      name: "avatar",
      type: "image",
    }),
    defineField({
      title: "Skills",
      name: "skills",
      type: "array",
      of: [
        defineArrayMember({
          title: "Skill",
          name: "skill",
          type: "string",
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
            }),
            defineField({
              title: "Social Media Link",
              name: "link",
              type: "url",
            }),
            defineField({
              title:
                "Social Media Icon code (Get them here: https://icon-sets.iconify.design/)",
              name: "icon",
              type: "string",
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
          title: "Years of Exprience",
          name: "exprience_years",
          type: "string",
        }),
        defineArrayMember({
          title: "Handled Projects",
          name: "projects_count",
          type: "string",
        }),
        defineArrayMember({
          title: "Happy Clients",
          name: "clients_count",
          type: "string",
        }),
      ],
    }),
  ],
});
