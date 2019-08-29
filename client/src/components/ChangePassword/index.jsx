import React, { Component } from 'react'
import './style.scss'
import eyeicon from '../../assets/img/eye-icon.svg'

import FormValidator from '../FormValidator'
import { rules } from './validationRules'

class ChangePassword extends Component {
  constructor(props) {
    super(props)

    this.validator = new FormValidator(rules)

    this.state = {
      old_password:'',
      new_password:'',
      type: 'password',
      validation: this.validator.createValidObj(),
      submitted: false,
      error:'',
    }
    this.handleShowHide = this.handleShowHide.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleShowHide=(e)=> {
    const states = this.state
    e.preventDefault()
    e.stopPropagation()
    this.setState(()=> ({
      type: states.type === 'input' ? 'password' : 'input',
    }))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const state = this.state
    const validation = this.validator.validate(state)
    this.setState((prevState) => ({
      ...prevState,
      validation: this.validator.validate(prevState),
      submitted:true,
    }))
    if (validation.isValid) {
    // handle actual form submission here
    }
  }


  render() {
    const states = this.state
    const validation = this.submitted
      ? this.validator.validate(states)
      : states.validation
    return (
      <div className='change-password-wrapper'>
        <div className='change-password-form'>
          <div className={validation.old_password.isInvalid ? 'has-error' : 'undefined'}>
            <label htmlFor='password-input'>old Password</label>
            <input
              type={states.type}
              id='password-input'
              name='old_password'
              value={states.old_password}
              onChange={this.handleChange}
            />
            <span className='help-block'>{validation.old_password.message}</span>
          </div>
          <div className={validation.new_password.isInvalid ? 'has-error' : 'undefined'}>
            <label htmlFor='new-password-input'>new password</label>
            <input
              type={states.type}
              id='new-password-input'
              name='new_password'
              value={states.new_password}
              onChange={this.handleChange}
            />
            <span className='help-block'>{validation.new_password.message}</span>
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
    )
  }
}
export { ChangePassword }
