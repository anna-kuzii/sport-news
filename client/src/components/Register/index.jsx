import React ,{ Component } from 'react';
import sign_up_bg from '../../assets/img/signup-bg.jpg';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };

        this.props.register(newUser);
    }

    render() {
        return (<div className="register-container ">
                <div className="container-fluid">
                    <div className="bg-img">
                        <div className="logo-in-sign-up">
                            <h1>Sport News</h1>
                        </div>
                        <img src={sign_up_bg} alt="signup_bg"/>
                    </div>
                    <form className="create-account-form" onSubmit={this.handleSubmit}>
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
                                <div className="first-name">
                                    <label htmlFor="first-name-input">First name</label>
                                    <input type="text" id="first-name-input" placeholder="John" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="last-name-input">Last name</label>
                                    <input type="text" id="last-name" placeholder="Doe" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="email-wrapper">
                                <label htmlFor="email-input">Email</label>
                                <input type="email" id="email-input" placeholder="johndoe@gmail.com" name="email" value={this.state.email} onChange={this.handleChange}/>
                                <label htmlFor="password-input">Password</label>
                                <input type="password" id="password-input" placeholder="4+ characters" name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary sing-up" >sign up</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };