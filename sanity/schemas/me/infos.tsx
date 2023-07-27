import { defineArrayMember, defineField } from "sanity"

const infos = defineField({
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
  })
  export default infos