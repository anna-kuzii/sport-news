import React from 'react';

import { Header } from '../Header';
import { Menu } from '../Menu';
import menuData from '../../assets/data/menuItems';

export const UserLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Menu menuList={menuData.menu} />
      {children}
    </div>
  );
};
