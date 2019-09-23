import React from 'react';

import { Header } from '../Header';
import { Menu } from '../Menu/DesktopMenu';
import menuData from '../../assets/data/menuItems';

export const UserLayout = ({ children }) => (
  <div>
    <Header />
    <Menu menuList={menuData.menu} />
    {children}
  </div>
);

