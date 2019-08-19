import React, { Component } from 'react';
import sign_up_bg from '../../assets/img/signup-bg.jpg';
import FormValidator from '../FormValidator';
import {rules} from '../FormValidator/rules';

class Register extends Component {
  constructor() {
   super();

this.validator = new FormValidator(rules);

  this.state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    validation: this.validator.createValidObj(),
    submitted: false,
  }
}

handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.setState({submitted:true});
    if (validation.isValid) {
      // handle actual form submission here
    }
 }

   render() {
    let validation = this.submitted ?                         // if the form has been submitted at least once
                      this.validator.validate(this.state) :   // then check validity every time we render
                      this.state.validation
   return(
    <div className="register-container ">
        <div className="container-fluid">
            <div className="bg-img">
                <div className="logo-in-sign-up">
                    <h1>Sport News</h1>
                </div>
                <img src={sign_up_bg} alt="signup_bg"/>
            </div>
            <div className="create-account-form">
                <div className="log-in">
                    <h3>Already have an account?</h3>
                    <a href="#" className="btn btn-primary login">Log In</a>
                </div>
                <div className="create-account-wrapper">
                    <h2>Create Account</h2>
                    <a href="#" className="btn fb-icon"></a>
                    <a href="#" className="btn gplus-icon"></a>
                    <p>Or use your email for registration</p>
                    <div className="user-info">
                        <div className={validation.first_name.isInvalid ?   'has-error': 'first_name'}>
                            <label htmlFor="first-name-input">First name</label>
                            <input type="text" id="first-name-input"
                            placeholder="John"
                            name="first_name"
                            onChange={this.handleInputChange}/>
                            <span className="help-block">{validation.first_name.message}</span>
                        </div>
                        <div className={validation.last_name.isInvalid ? 'has-error' : 'last_name'}>
                           <label htmlFor="last-name-input">Last name</label>
                            <input type="text" id="last-name"
                            placeholder="Doe"
                            name="last_name"
                            onChange={this.handleInputChange}/>
                            <span className="help-block">{validation.last_name.message}</span>
                        </div>
                    </div>
                    <div className="email-wrapper">
                      <div className={validation.email.isInvalid ? 'has-error' : 'undefined'}>
                        <label htmlFor="email-input">Email</label>
                        <input type="email" id="email-input"
                          placeholder="johndoe@gmail.com"
                          name="email"
                          onChange={this.handleInputChange}/>
                          <span className="help-block">{validation.email.message}</span>
                      </div>
                      <div className={validation.password.isInvalid ? 'has-error' : 'undefined'}>
                        <label htmlFor="password-input">Password</label>
                        <input type="password" id="password-input"
                        placeholder="4+ characters"
                        name="password"
                        onChange={this.handleInputChange}/>
                        <span className="help-block">{validation.password.message}</span>
                      </div>
                    </div>
                    <button onClick={this.handleFormSubmit } className="btn btn-primary sing-up">sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
 }
}

export default Register
