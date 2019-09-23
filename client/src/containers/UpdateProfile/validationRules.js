export const rules = [
  {
    field: 'newName',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter a new name.',
  },
  {
    field: 'newEmail',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required.',
  },
  {
    field: 'newEmail',
    method: 'isLength',
    args: [ { max: 256 } ],
    validWhen: true,
    message: 'enter less than 256 char.',
  },
  {
    field: 'newEmail',
    method: 'isEmail',
    validWhen: true,
    message: 'That is not a valid email.',
  },
];
