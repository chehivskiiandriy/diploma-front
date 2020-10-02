import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

const TeacherNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.home} name="Профіль" />
      <NavItem path={routes.logout} name="Вихід" />
    </div>
  </nav>
);

export default TeacherNav;
