export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube Vlog Link',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Itinerary', value: 'itinerary' },
          { title: 'Vegan Food', value: 'vegan-food' },
          { title: 'Transport', value: 'transport' },
        ],
      },
    },
    {
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
}