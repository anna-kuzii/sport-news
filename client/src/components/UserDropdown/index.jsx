import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

class UserDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props,
      displayMenu: false,
    }

    this.handleShowDropdownMenu = this.handleShowDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  handleShowDropdownMenu(event) {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  render() {
    const state = this.state

    return (
      <div className='dropdown'>
        <div
          className='button-menu'
          onClick={this.handleShowDropdownMenu}
          onKeyPress={this.handleShowDropdownMenu}
          role='button'
          tabIndex={0}
        >
          <div className='avatar' />
          {' '+ state.first_name +' '+ state.last_name}
          <div className={state.displayMenu ? 'down-triangle' : 'up-triangle'} />
        </div>

        <div className={state.displayMenu ? 'dropdown-content': 'null'}>
          <div className='decor' />
          <div className='user-name'>{state.first_name +' '+state.last_name}</div>
          <div className='email'>{state.email}</div>
          <button type='button' className='button-view'>view profile</button>
          <Link to='/create-ads'>Personal</Link>
          <Link to='/changePassword'>Change Password</Link>
          <Link to='/mySurveys'>My Surveys</Link>
          <Link to='/setting'>Log Out</Link>
        </div>
      </div>

    )
  }
}

export default UserDropdown
