import {defineField, defineType} from 'sanity'


export const eventType = defineType
({
  name: 'Blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
   
    
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
  ],
})

export default eventType