import React, { Component } from 'react';
import { Share } from '../../../components/Share';
import { subscription } from '../action';
import { connect } from 'react-redux';
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
              <a href='/'>About Sport News</a>
            </li>
            <li>
              <a href='/'>News / In the Press</a>
            </li>
            <li>
              <a href='/'>Advertising / Sports Blogger Ad Network</a>
            </li>
            <li>
              <a href='/'>Events</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>CONTRIBUTORS</h4>
          <ul className='contributors-list'>
            <li>
              <a href='/'>Featured Writers Program</a>
            </li>
            <li>
              <a href='/'>Featured Team Writers Program</a>
            </li>
            <li>
              <a href='/'>Internship Program</a>
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

const mapState = ({ subscription }) => ({
  forgot: subscription,
});


const actionCreators = {
  subscription,
};

const connectedSubscriptionPage = connect(
  mapState,
  actionCreators
)(Footer);

export { connectedSubscriptionPage as Footer };
