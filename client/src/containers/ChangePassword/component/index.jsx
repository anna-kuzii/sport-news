import React, { Component } from 'react';
import './style.scss';
import eyeicon from '../../../assets/img/eye-icon.svg';

import FormValidator from '../../../utils/FormValidator';
import { rules } from '../validationRules';
import { changePassword } from '../action';
import { connect } from 'react-redux';

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
    const { newPassword, oldPassword } = this.state;
    const { changePassword } = this.props;
    const data = {
      oldPassword,
      password: newPassword,
    };
    const validation = this.validator.validate(this.state);

    this.setState((prevState) => ({
      ...prevState,
      validation: this.validator.validate(prevState),
      submitted: true,
    }));

    if (validation.isValid) {
      changePassword(data);
    }
  }


  render() {
    const { type, oldPassword, newPassword, validation, submitted } = this.state;
    const { error } = this.props;
    const validations = submitted ? this.validator.validate(this.state) : validation;

    return (
      <div className='change-password-wrapper'>
        <div className='change-password-form'>
          {error && <span className='change-password-error'>{error}</span>}
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

const mapState = ({ changePassword: { error } }) => ({
  error,
});

const actionCreators = {
  changePassword,
};

const connectedChangePasswordPage = connect(mapState, actionCreators)(ChangePassword);

export { connectedChangePasswordPage as ChangePassword };
