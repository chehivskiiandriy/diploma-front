import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

const AdminNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.admin.departments} name="Департаменти" />
      <NavItem path={routes.admin.heads} name="Голови департаментів" />
    </div>
    <div className="nav-section">
      <NavItem path={routes.admin.logout} name="Вихід" />
    </div>
  </nav>
);

export default AdminNav;
