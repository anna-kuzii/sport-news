import React, { Component } from 'react';
import { MenuItem } from './MenuItem';
import './style.scss';

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
      <div className='desktopMenuContainer'>
        <ul className='listContainer'>
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
    );
  }
}
