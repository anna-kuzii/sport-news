import React, { Component } from 'react';
import { MenuItem } from './MenuItem';
import burgerIcon from '../../../assets/img/burger-icon.svg';
import closeMenu from '../../../assets/img/close-menu.svg';
import './style.scss';

export class Menu extends Component {
  constructor(props) {
    super(props);

    const { title, menuList } = this.props;

    this.state = {
      activeItemTitle: title,
      activeItemSubMenu: menuList,
      numberOfStep: 0,
      arrayOfStates: [],
      activeMenu: 1,
      toggleIcon: 0,
    };
  }

  setActiveItem = (title, submenu) => {
    this.setState((prevState) => ({
      ...prevState,
      arrayOfStates: [ ...prevState.arrayOfStates, {
        title: prevState.activeItemTitle,
        submenu: prevState.activeItemSubMenu,
      } ],
      numberOfStep: prevState.numberOfStep + 1,
      activeItemTitle: title,
      activeItemSubMenu: submenu,
    }));
  };

  handleBackToPreviousMenu = () => {
    const { numberOfStep } = this.state,
      index = numberOfStep - 1;

    if (!numberOfStep) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      activeItemTitle: prevState.arrayOfStates[index].title,
      activeItemSubMenu: prevState.arrayOfStates[index].submenu,
      arrayOfStates: prevState.arrayOfStates.slice(0, index),
      numberOfStep: prevState.numberOfStep - 1,
    }));
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeMenu: !prevState.activeMenu,
    }));
  };

  renderMenu = (title, submenu) => {
    const { numberOfStep, activeMenu } = this.state,
      firstList = numberOfStep ? '' : 'main-list',
      showMenu = activeMenu ? '' : 'active-menu',
      toggleIcon = activeMenu ? burgerIcon : closeMenu;

    (activeMenu)
      ? document.body.style.overflow = 'visible'
      : document.body.style.overflow = 'hidden';

    return (
      <div className='mobile-wrapper'>
        <button
          type='button'
          onClick={this.handleToggle}
          className='toggle-button'
        >
          <img src={toggleIcon} alt='toggle icon' />
        </button>
        <div className={`mobile-menu ${showMenu}`}>
          {numberOfStep ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              className='back-button'
              role='button'
              tabIndex='0'
              onClick={this.handleBackToPreviousMenu}
            >
              <i className='arrow-left' />
              Back to main menu
            </div>
          ) : ''}
          <div className={`menu-wrapper ${firstList}`}>
            <div className='title'>{title}</div>
            <ul>
              {submenu.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  setActiveItem={this.setActiveItem}
                />
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { activeItemTitle, activeItemSubMenu } = this.state;

    return (
      this.renderMenu(activeItemTitle, activeItemSubMenu)
    );
  }
}
