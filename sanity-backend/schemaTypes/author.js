import {defineField, defineType} from 'sanity'

export const eventType = defineType
({
  name: 'Author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'Author',
      type: 'string',
    }), 

    defineField({
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          },
       
        ]
      }),
      {
          title: 'Blog Image ',
          name: 'poster',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'createdAt',
              type: 'datetime',
              title: 'Created At',
            }
          ]
        }
  ]
})
export default eventType