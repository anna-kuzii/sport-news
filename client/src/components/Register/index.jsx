import React, { Component } from 'react'
import sign_up_bg from '../../assets/img/register-login-bg.jpg'
import { Link } from 'react-router-dom'

import FormValidator from '../FormValidator'
import { rules } from '../FormValidator/rules'
import { userActions } from '../../_actions'
import { connect } from 'react-redux'


class Register extends Component {
  constructor(props) {
    super(props)

    this.validator = new FormValidator(rules)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password:'',
      validation: this.validator.createValidObj(),
      submitted: false,
      error: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const state = this.state
    const newUser = {
      first_name : state.first_name,
      last_name: state.last_name,
      email: state.email,
      password: state.password,
    }
    const { register } = this.props
    register(newUser)
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
    const { registering } = this.props


    return (
      <div className='register-container '>
        <div className='container-fluid'>
          <div className='bg-img'>
            <div className='logo'>
              <h1>Sport News</h1>
            </div>
            <img src={sign_up_bg} alt='signup_bg' />
          </div>
          <div className='create-account-form'>
            <div className='log-in'>
              <h3>Already have an account?</h3>
              <Link to='/login' className='btn btn-primary login'>Log In</Link>
            </div>
            <div className='create-account-wrapper'>
              <h2>Create Account</h2>
              <a
                href='facebook.com'
                className='btn fb-icon'
              >facebook
              </a>
              <a
                href='google.com'
                className='btn gplus-icon'
              >google</a>
              <p>Or use your email for registration</p>
              { registering.error
              && <span className='register-error'>{registering.error}</span>
              }
              <div className='user-info'>
                <div className={validation.first_name.isInvalid ? 'has-error first-name': 'first-name'}>
                  <label htmlFor='first-name-input'>First name</label>
                  <input
                    type='text'
                    id='first-name-input'
                    placeholder='John'
                    name='first_name'
                    value={states.first_name}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validation.first_name.message}</span>
                </div>
                <div className={validation.last_name.isInvalid ? 'has-error last-name' : 'last-name'}>
                  <label htmlFor='last-name-input'>Last name</label>
                  <input
                    type='text'
                    id='last-name'
                    placeholder='Doe'
                    name='last_name'
                    value={states.last_name}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validation.last_name.message}</span>
                </div>
              </div>
              <div className='email-wrapper'>
                <div className={validation.email.isInvalid ? 'has-error' : 'undefined'}>
                  <label htmlFor='email-input'>Email</label>
                  <input
                    type='email'
                    id='email-input'
                    placeholder='johndoe@gmail.com'
                    name='email'
                    value={states.email}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validation.email.message}</span>
                </div>
                <div className={validation.password.isInvalid ? 'has-error' : 'undefined'}>
                  <label htmlFor='password-input'>Password</label>
                  <input
                    type='password'
                    id='password-input'
                    placeholder='4+ characters'
                    name='password'
                    value={states.password}
                    onChange={this.handleChange}
                  />
                  <span className='help-block'>{validation.password.message}</span>
                </div>
              </div>
              <button
                type='button' onClick={this.handleSubmit}
                className='btn btn-primary sing-up'
              >sign up</button>
              <div className='mobile-link'>
                <Link to='/login' className='mobile-link'>Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return { registering : state.registration }
}

const actionCreators = {
  register: userActions.register,
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register)
export { connectedRegisterPage as Register }
