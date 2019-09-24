import React, { Component } from 'react';
import '../style.scss';
import { Link } from 'react-router-dom';

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
    const { item: { title, menu, path } } = this.props;

    return (
      <li className='list-item'>
        <Link
          to={path}
          onClick={menu && this.handleOpenMenu}
        >
          { title }
        </Link>
      </li>
    );
  }
}
