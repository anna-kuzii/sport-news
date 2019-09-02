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
      old_password:'',
      new_password:'',
      type: 'password',
      validation: this.validator.createValidObj(),
      submitted: false,
      error:'',
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
      submitted:true,
    }));
    if (validation.isValid) {
    // handle actual form submission here
    }
  }


  render() {
    const { type, old_password, new_password, validation, submitted } = this.state;
    const validations = submitted ? this.validator.validate(this.state) : validation;

    return (
      <div className='change-password-wrapper'>
        <div className='change-password'>
          <div className='change-password-form'>
            <div className={validations.old_password.isInvalid ? 'has-error' : 'undefined'}>
              <label htmlFor='password-input'>old Password</label>
              <input
                type={type}
                id='password-input'
                name='old_password'
                value={old_password}
                onChange={this.handleChange}
              />
              <span className='help-block'>{validations.old_password.message}</span>
            </div>
            <div className={validations.new_password.isInvalid ? 'has-error' : 'valid'}>
              <label htmlFor='new-password-input'>new password</label>
              <input
                type={type}
                id='new-password-input'
                name='new_password'
                value={new_password}
                onChange={this.handleChange}
              />
              <span className='help-block'>{validations.new_password.message}</span>
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
      </div>
    );
  }
}
export { ChangePassword };
