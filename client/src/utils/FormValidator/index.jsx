import validator from 'validator';

class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  validate(state) {
    return this.validations.reduce((result, rule) => {
      if (!result[rule.field].isInvalid) {
        const fieldValue = state[rule.field].toString();
        const args = rule.args || [];
        const validationMethod = validator[rule.method];

        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          result[rule.field] = { isInvalid: true, message: rule.message };
          result.isValid = false;
        }
      }
      return result;
    }, this.createValidObj());
  }

  createValidObj() {
    const validation = this.validations.reduce((result, rule) => (
      { ...result,
        [rule.field]: {
          isInvalid: false,
          message: '',
        },
      }
    ), {});

    return { isValid: true, ...validation };
  }
}

export default FormValidator;
