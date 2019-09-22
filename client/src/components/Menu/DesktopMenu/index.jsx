import React, { Component } from 'react';
import { MenuItem } from './MenuItem';
import './style.scss';
import { Link } from 'react-router-dom';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: -1,
    };
  }

  setActiveItem = (index) => {
    this.setState((prevState) => ({
      ...prevState,
      activeIndex: prevState.activeIndex === index ? -1 : index,
    }));
  };

  render() {
    const { menuList } = this.props,
      { activeIndex } = this.state;

    return (
      <div className='menu-wrapper'>
        <div className='active-menu' />
        <div className='desktop-menu-container'>
          <Link to='/' className='list-item home-link' >Home</Link>
          <ul className='list-container'>
            {menuList.map((item, index) => (
              <MenuItem
                item={item}
                index={index}
                key={item.id}
                activeItem={activeIndex}
                setActiveItem={this.setActiveItem}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
