import React, { Component } from 'react';
import '../style.scss';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  handleOpenMenu = () => {
    const { item: { title, menu }, setActiveItem } = this.props;

    if (menu) {
      setActiveItem(title, menu);
    }
  };

  render() {
    const { item: { title, menu } } = this.props;

    //TODO when news will be done, button should be replaced by Link with to
    return (
      <li className='list-item'>
        <button
          type='button'
          onClick={menu && this.handleOpenMenu}
        >
          { title }
        </button>
      </li>
    );
  }
}
