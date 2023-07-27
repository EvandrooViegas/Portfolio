import { defineArrayMember, defineField } from "sanity";

const testimonials = defineField({
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
  })

export default testimonials