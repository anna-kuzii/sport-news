import validator from 'validator';

class FormValidator {
  constructor(validations) {

    this.validations = validations;
  }

  validate(state) {
    return this.validations.reduce((result,rule) => {
      if (!result[rule.field].isInvalid) {

        const field_value = state[rule.field].toString();
        const args = rule.args || [];
        const validation_method = validator[rule.method]

        if(validation_method(field_value, ...args, state) !== rule.validWhen) {
          result[rule.field] = { isInvalid: true, message: rule.message }
          result.isValid = false;
        }
      }
      return result;
    },this.valid());
   }

  valid() {
    
    return { isValid: true, ...(this.validations.reduce((result, rule) => {
      result[rule.field] = { isInvalid: false, message: '' }
      return result;
    },{}))};
  }
}

export default FormValidator;