import React from 'react';

import { Header } from '../Header';
import menuData from '../../assets/data/menuItems';
import { MenuWrapper } from '../Menu';

export const UserLayout = ({ children }) => (
  <div>
    <Header />
    <MenuWrapper menuList={menuData.menu} />
    {children}
  </div>
);

