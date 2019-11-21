(() => ({
  name: 'ExternalLibrary',
  icon: 'RowIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'ExternalLibrary',
      options: [
        {
          value: 'https://maps.googleapis.com/maps/api/',
          label: 'Javascript URL',
          key: 'javascripturl',
          type: 'TEXT',
        },
      ],
      descendants: [],
    },
  ],
}))();
