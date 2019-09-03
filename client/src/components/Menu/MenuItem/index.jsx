import React, { Component } from 'react';
import { Menu } from '../index';
import '../style.scss';

export class MenuItem extends Component {
  handleOpenMenu = () => {
    const { index, setActiveItem, item } = this.props;

    if (item.menu) {
      setActiveItem(index);
    }
  };

  render() {
    const { index, activeItem } = this.props,
      { item: { title, menu } } = this.props,
      isActive = index === activeItem,
      activeClass = isActive ? 'activeItem': '';

    //TODO when news will be done, button should be replaced by Link with to
    return (
      <li className='listItem'>
        <button
          type='button'
          onClick={this.handleOpenMenu}
          className={activeClass}
        >
          {title}
        </button>
        { isActive && <Menu menuList={menu} /> }
      </li>
    );
  }
}
