import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class UserDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      displayMenu: false,
    };
    this.handleShowDropdownMenu = this.handleShowDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  handleShowDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    const { displayMenu, firstName, lastName, email } = this.state;

    return (
      <div className='dropdown-wrapper'>
        <div className='dropdown'>
          <div
            className='button-menu'
            onClick={this.handleShowDropdownMenu}
            onKeyPress={this.handleShowDropdownMenu}
            role='button'
            tabIndex={0}
          >
            <div className='avatar' />
            {`${firstName} ${ lastName}`}
            <div className={(displayMenu && 'down-triangle') || 'up-triangle'} />
          </div>
          {displayMenu && (
            <div className='dropdown-content'>
              <div className='dropdown-triangle' />
              <div className='user-name'>{`${firstName} ${ lastName}`} </div>
              <div className='email'>{email}</div>
              <button type='button' className='button-view'>view profile</button>
              <Link to='/create-ads'>Personal</Link>
              <Link to='/changePassword'>Change Password</Link>
              <Link to='/mySurveys'>My Surveys</Link>
              <Link to='/setting'>Log Out</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserDropdown;
