import React, { Component } from 'react';
import './style.scss';
import eyeicon from '../../assets/img/eye-icon.svg';

import FormValidator from '../../utils/FormValidator';
import { rules } from './validationRules';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(rules);

    this.state = {
      oldPassword: '',
      newPassword: '',
      type: 'password',
      validation: this.validator.createValidObj(),
      submitted: false,
      error: '',
    };
    this.handleShowHide = this.handleShowHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShowHide=(e)=> {
    const { type } = this.state;

    e.preventDefault();
    e.stopPropagation();
    this.setState(()=> ({
      type: type === 'input' ? 'password' : 'input',
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validation = this.validator.validate(this.state);

    this.setState((prevState) => ({
      ...prevState,
      validation: this.validator.validate(prevState),
      submitted: true,
    }));
    if (validation.isValid) {
    // handle actual form submission here
    }
  }


  render() {
    const { type, oldPassword, newPassword, validation, submitted } = this.state;
    const validations = submitted ? this.validator.validate(this.state) : validation;

    return (
      <div className='change-password-wrapper'>
        <div className='change-password-form'>
          <div className={validations.oldPassword.isInvalid ? 'has-error' : 'valid'}>
            <label htmlFor='password-input'>old Password</label>
            <input
              type={type}
              id='password-input'
              name='oldPassword'
              value={oldPassword}
              onChange={this.handleChange}
            />
            <span className='help-block'>{validations.oldPassword.message}</span>
          </div>
          <div className={validations.newPassword.isInvalid ? 'has-error' : 'valid'}>
            <label htmlFor='new-password-input'>new password</label>
            <input
              type={type}
              id='new-password-input'
              name='newPassword'
              value={newPassword}
              onChange={this.handleChange}
            />
            <span className='help-block'>{validations.newPassword.message}</span>
            <span
              className='password-show'
              role='presentation'
              onClick={this.handleShowHide}
            ><img src={eyeicon} alt='show/hide icon' /></span>
          </div>
        </div>
        <button
          type='button'
          onClick={this.handleSubmit}
          className='change-password-btn'
        >CHANGE PASSWORD</button>
      </div>

    );
  }
}
export { ChangePassword };
