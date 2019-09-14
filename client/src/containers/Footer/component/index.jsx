import React, { Component } from 'react';
import { Share } from '../../../components/Share';
import { subscription } from '../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;

    const { subscription } = this.props;

    subscription({ email });
  };

  render() {
    const { email } = this.state;

    return (
      <footer className='footer-container'>
        <div className='footer-item'>
          <h4>COMPANY INFO</h4>
          <ul className='company-list'>
            <li>
              <Link to='/'>About Sport News</Link>
            </li>
            <li>
              <Link to='/'>News / In the Press</Link>
            </li>
            <li>
              <Link to='/'>Advertising / Sports Blogger Ad Network</Link>
            </li>
            <li>
              <Link to='/'>Events</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>CONTRIBUTORS</h4>
          <ul className='contributors-list'>
            <li>
              <Link to='/'>Featured Writers Program</Link>
            </li>
            <li>
              <Link to='/'>Featured Team Writers Program</Link>
            </li>
            <li>
              <Link to='/'>Internship Program</Link>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>NEWSLETTER</h4>
          <p>Sing up to recive the latest in sport news</p>
          <form className='subscribe'>
            <input
              type='email'
              id='email-input'
              className='article-input'
              placeholder='Your email address'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <button type='button' onClick={this.handleSubmit}>
              Subscribe
            </button>
          </form>
          <Share />
        </div>
      </footer>
    );
  }
}

const mapState = (state) => ({
  forgot: state.subscription,
});


const actionCreators = {
  subscription: subscription,
};

const connectedSubscriptionPage = connect(
  mapState,
  actionCreators
)(Footer);

export { connectedSubscriptionPage as Footer };
