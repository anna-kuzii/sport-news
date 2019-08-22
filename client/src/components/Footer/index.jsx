import React from 'react';
import './style.scss';

 const Footer = () => (
  <footer className='footer-container'>
    <div className='footer-item'>
      <h4>COMPANY INFO</h4>
      <ul className='company-list'>
        <li><a href='about'>About Sport News</a></li>
        <li><a href='news'>News / In the Press</a></li>
        <li><a href='advertising'>Advertising / Sports Blogger Ad Network</a></li>
        <li><a href='events'>Events</a></li>
        <li><a href='contact'>Contact Us</a></li>
      </ul>
    </div>
    <div className='footer-item'>
      <h4>CONTRIBUTORS</h4>
      <ul className='contributors-list'>
        <li><a href='writers'>Featured Writers Program</a></li>
        <li><a href='writersTeam'>Featured Team Writers Program</a></li>
        <li><a href='internship'>Internship Program</a></li>    
      </ul>
    </div>
    <div className='footer-item'>
      <h4>NEWSLETTER</h4>
      <p>Sing up to recive the latest in sport news</p>
      <form className='subscribe'>
        <input type='text' className='article-input' placeholder='Your email address' />
        <button>Subscribe</button>
      </form>
      <div className='services'>
        <span>Share</span>
        <a href="facebook" className='facebook-icon'></a>
        <a href="twitter" className='twitter-icon'></a>
        <a href="googlePlus" className='googlePlus-icon'></a>
      </div>
    </div>
  </footer>
);

export default Footer;