import React, {Component} from 'react'
import login_bg from '../../assets/img/register-login-bg.jpg'
import { Link } from 'react-router-dom'
import { userActions } from '../../_actions'
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const state = this.state;
        const user = {
            email: state.email,
            password: state.password,
        };

        const { login } = this.props;
        login(user)
    }

    render() {
        const states = this.state
        const { logining } = this.props;

        return (
            <div className='login-container '>
                <div className='container-fluid'>
                    <div className='bg-img'>
                        <div className='logo-in-sign-up'>
                            <h1>Sport News</h1>
                        </div>
                        <img src={login_bg} alt='background'/>
                    </div>
                    <div className='log-in-form'>
                        <div className='get-started'>
                            <h3>Dont have an account?</h3>
                            <Link to='/register' className='btn btn-primary'>Get Started</Link>
                        </div>
                        <div className='log-in-wrapper'>
                            <h2>Log in to Sport News</h2>
                            { logining.error
                            && <span className='login-error'>{logining.error}</span>
                            }
                            <div className='email-wrapper'>
                                <label htmlFor='email-input'>Email address</label>
                                <input
                                    type='email'
                                    id='email-input'
                                    placeholder='Email@gmail.com'
                                    name='email'
                                    value={states.email}
                                    onChange={this.handleChange}
                                />
                                <div className='forgot-pass'>
                                    <label htmlFor='password-input'>Password</label>
                                    <Link to='/forgotpassword'>Forgot password?</Link>
                                </div>
                                <input
                                    type='password'
                                    id='password-input'
                                    placeholder='Enter your password'
                                    name='password'
                                    value={states.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                type='button'
                                className='btn btn-primary log-in'
                                onClick={this.handleSubmit}
                            >log in
                            </button>
                            <div className='mobile-link'>
                                <Link to='/register' className='mobile-link'>Dont have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState (state)  {
    return {
    auth: state.auth,
    errors: state.errors,
    logining: state.login,
    }
};

const actionCreators = {
    login: userActions.login,
}

const connectedLoginPage = connect(mapState, actionCreators)(Login)
export { connectedLoginPage as Login }