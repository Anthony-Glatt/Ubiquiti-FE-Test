import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/nav';

const Layout: React.FC = () => (
  <div>
    <Nav title="Device" author="Anthony" />
    <Outlet />
  </div>
);

export default Layout;
