export const rules = [
  {
    field: 'old_password',
    method: 'isLength',
    args: [ { min:4, max:256 } ],
    validWhen: true,
    message: '4+ character',
  },
  {
    field: 'new_password',
    method: 'isLength',
    args: [ { min:4, max:256 } ],
    validWhen: true,
    message: '4+ character',
  },
];
