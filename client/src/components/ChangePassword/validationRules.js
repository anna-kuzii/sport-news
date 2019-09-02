export const rules = [
  {
    field: 'oldPassword',
    method: 'isLength',
    args: [ { min: 4, max: 256 } ],
    validWhen: true,
    message: '4+ character',
  },
  {
    field: 'newPassword',
    method: 'isLength',
    args: [ { min: 4, max: 256 } ],
    validWhen: true,
    message: '4+ character',
  },
];
