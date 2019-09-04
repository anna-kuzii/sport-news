export const rules = [
  {
    field: 'firstName',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter a first name.',
  },
  {
    field: 'firstName',
    method: 'isLength',
    args: [ { max: 256 } ],
    validWhen: true,
    message: 'enter less than 256 char.',
  },
  {
    field: 'lastName',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter a last name.',
  },
  {
    field: 'lastName',
    method: 'isLength',
    args: [ { max: 256 } ],
    validWhen: true,
    message: 'enter less than 256 char.',
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required.',
  },
  {
    field: 'email',
    method: 'isLength',
    args: [ { max: 256 } ],
    validWhen: true,
    message: 'enter less than 256 char.',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'That is not a valid email.',
  },
  {
    field: 'password',
    method: 'isLength',
    args: [ { min: 4, max: 256 } ],
    validWhen: true,
    message: '4+ character',
  },
];
