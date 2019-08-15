import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="bg-img">
                    </div>
                    <div className="row-fluid">
                        <div className="LogoInSignUp">
                            <h1>Sport News</h1>
                        </div>
                        <div className="LogIn">
                            <h3>Already have an account?</h3>
                            <a href="#" className="btn btn-primary login">Log In</a>
                        </div>
                    </div>
                    <div className="ca-form">
                        <div className="ca-elements">
                            <h2>Create Account</h2>
                            <a href="#" className="btn fb-icon"></a>
                            <a href="#" className="btn gplus-icon"></a>
                            <p>Or use your email for registration</p>
                            <div className="first-name">
                                <h5>first name</h5>
                                <br/>
                                <input type="text" name="first-name" placeholder="John"/>
                            </div>
                            <div className="last-name">
                                <h5>last name</h5>
                                <br/>
                                <input type="text" name="last-name" placeholder="Doe"/>
                            </div>
                            <div className="email-div">
                                <h5>Email</h5>
                                <input type="email" name="email" placeholder="johndoe@gmail.com"/>
                                <br/>
                                <h5>Password</h5>
                                <input type="password" name="password" placeholder="4+ characters"/>
                            </div>
                            <br/>
                            <a href="#" className="btn btn-primary sing-up">sign up</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Register;