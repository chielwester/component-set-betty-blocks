(() => ({
  name: 'DateInput',
  icon: 'DatePickerIcon',
  category: 'FORM',
  structure: [
    {
      name: 'DateInput',
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
      ],
      descendants: [],
    },
  ],
}))();
