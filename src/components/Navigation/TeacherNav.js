import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import exitSvg from '../../assets/icons/exit.svg';

const TeacherNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.home} name="Профіль" icon={userSvg} />
      <NavItem path={routes.logout} name="Вихід" icon={exitSvg} />
    </div>
  </nav>
);

export default TeacherNav;
