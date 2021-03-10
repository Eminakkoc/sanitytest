export default {
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      type: 'image',
      name: 'buttonImage',
      title: 'Image',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'buttonImage',
    },
  },
}
