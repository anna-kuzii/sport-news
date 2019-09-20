import React, { Component } from 'react';
import { MenuItem } from './MenuItem';

export class Menu extends Component {
  constructor(props) {
    super(props);

    const { title, menuList } = this.props;

    this.state = {
      activeItemTitle: title,
      activeItemSubMenu: menuList,
      numberOfStep: 0,
      arrayOfStates: [],
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

  renderMenu = (title, submenu) => {
    const { numberOfStep } = this.state,
      firstList = numberOfStep ? '' : 'mainList';

    return (
      <div className='mobileMenu'>
        {numberOfStep ? (
          <div
            className='backButton'
            role='button'
            tabIndex='0'
            onClick={() => {}}
            onKeyPress={this.handleBackToPreviousMenu}
          >
            Back button
          </div>
        ) : ''}
        <div className={`menuWrapper ${firstList}`}>
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
    );
  };

  render() {
    const { activeItemTitle, activeItemSubMenu } = this.state;

    return (
      this.renderMenu(activeItemTitle, activeItemSubMenu)
    );
  }
}
