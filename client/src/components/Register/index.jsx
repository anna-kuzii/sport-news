import React from 'react';

export const Register = () =>
    <div className="register-container ">
        <div className="container-fluid">
            <div className="bg-img">
                <div className="logo-in-sign-up">
                    <h1>Sport News</h1>
                </div>
            </div>
            <div className="create-account-form">
                <div className="log-in">
                    <h3>Already have an account?</h3>
                    <a href="#" className="btn btn-primary login">Log In</a>
                </div>
                <div className="create-account-elements">
                    <h2>Create Account</h2>
                    <a href="#" className="btn fb-icon"></a>
                    <a href="#" className="btn gplus-icon"></a>
                    <p>Or use your email for registration</p>
                    <div className="first-last-name">
                        <h5>first name</h5>
                        <h5>last name</h5>
                    </div>
                    <div className="user-info">
                        <input type="text" name="first-name" placeholder="John"/>
                        <input type="text" name="last-name" placeholder="Doe"/>
                    </div>
                    <div className="email-wrapper">
                        <h5>Email</h5>
                        <input type="email" name="email" placeholder="johndoe@gmail.com"/>
                        <h5>Password</h5>
                        <input type="password" name="password" placeholder="4+ characters"/>
                    </div>
                    <a href="#" className="btn btn-primary sing-up">sign up</a>
                </div>
            </div>
        </div>
    </div>