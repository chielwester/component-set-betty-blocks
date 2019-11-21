(() => ({
  name: 'TextArea',
  icon: 'TextAreaIcon',
  category: 'FORM',
  structure: [
    {
      name: 'TextArea',
      options: [
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
        {
          value: 'Label text',
          label: 'Label text',
          key: 'formComponentLabel',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Input text',
          key: 'formComponentValue',
          type: 'TEXT',
        },
        {
          value: false,
          label: 'Required',
          key: 'formComponentRequired',
          type: 'TOGGLE',
        },
        {
          value: '6.5rem',
          label: 'Height',
          key: 'height',
          type: 'SIZE',
					configuration: {
						as: 'UNIT'
					}
        },

      ],
      descendants: [],
    },
  ],
}))();
