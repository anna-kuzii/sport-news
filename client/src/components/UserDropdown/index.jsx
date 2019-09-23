import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../containers/Logout/action';
import { store } from '../../helpers';
import './style.scss';
import { connect } from 'react-redux';

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

  handleLogout(e) {
    e.preventDefault();
    store.dispatch(logoutUser());
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
    const { displayMenu } = this.state;
    const { user } = this.props;

    return (
      <div className='dropdown-wrapper'>
        <div
          className='button-menu'
          onClick={this.handleShowDropdownMenu}
          onKeyPress={this.handleShowDropdownMenu}
          role='button'
          tabIndex={0}
        >
          <div className='avatar' />
          {`${user.firstName} ${user.lastName}`}
          <div className={(displayMenu && 'down-triangle') || 'up-triangle'} />
        </div>
        {displayMenu && (
          <div className='dropdown-content'>
            <div className='dropdown-triangle' />
            <div className='user-name'>{`${user.firstName} ${user.lastName}`}</div>
            <Link
              to='/userprofile/updateprofile'
              type='button'
              className='button-view'
            >view profile</Link>
            <div className='link-wrapper' >
              <Link to='/userprofile/changepassword'>Change Password</Link>
              <Link to='/addnews'>Add News</Link>
              <hr />
              <button
                type='button'
                onClick={this.handleLogout}
              >
              Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ login: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(UserDropdown);
