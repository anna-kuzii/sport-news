import React from 'react';
import login_bg from '../../assets/img/register-login-bg.jpg';

export const Login = () =>
    <div className="login-container ">
        <div className="container-fluid">
            <div className="bg-img">
                <div className="logo-in-sign-up">
                    <h1>Sport News</h1>
                </div>
                <img src={login_bg} alt="login_bg"/>
            </div>
            <div className="log-in-form">
                <div className="get-started">
                    <h3>Don't have an account?</h3>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
                <div className="log-in-wrapper">
                    <h2>Log in to Sport News</h2>
                    <div className="email-wrapper">
                        <label htmlFor="email-input">Email address</label>
                        <input type="email" id="email-input" placeholder="Email@gmail.com"/>
                        <div className="forgot-pass">
                            <label htmlFor="password-input">Password</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <input type="password" id="password-input" placeholder="Enter your password"/>
                    </div>
                    <button className="btn btn-primary log-in">log in</button>
                    <a href="#">Dont have an account?</a>
                </div>
            </div>
        </div>
    </div>