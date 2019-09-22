import React, { Component } from 'react';
import { Menu } from '../index';
import '../style.scss';
import { Link } from 'react-router-dom';

export class MenuItem extends Component {
  handleOpenMenu = () => {
    const { index, setActiveItem, item } = this.props;

    if (item.menu) {
      setActiveItem(index);
    }
  };

  render() {
    const { index, activeItem } = this.props,
      { item: { title, menu, path } } = this.props,
      isActive = index === activeItem,
      activeClass = isActive ? 'active-item': '';

    return (
      <li className='list-item'>
        <Link
          to={path}
          onClick={this.handleOpenMenu}
          className={activeClass}
        >
          {title}
        </Link>
        { isActive && <Menu menuList={menu} /> }
      </li>
    );
  }
}
