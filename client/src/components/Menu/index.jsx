import React, { Component } from 'react';
import { Menu as MobileMenu } from './MobileMenu';
import { Menu as DesktopMenu } from './DesktopMenu';
import menuData from '../../assets/data/menuItems';


export class MenuWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
    };
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 1021 });
  };

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        {isMobile ? <MobileMenu title='Home' menuList={menuData.menu} /> : <DesktopMenu menuList={menuData.menu} />}
      </div>
    );
  }
}
