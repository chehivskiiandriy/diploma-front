import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

const StudentNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.student.myTheme} name="Моя тема" />
    </div>
    <div className="nav-section">
      <NavItem path={routes.home} name="Профіль" />
      <NavItem path={routes.logout} name="Вихід" />
    </div>
  </nav>
);

export default StudentNav;
