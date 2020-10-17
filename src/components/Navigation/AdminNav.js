import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import studentSvg from '../../assets/icons/student.svg';
import exitSvg from '../../assets/icons/exit.svg';

const AdminNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.admin.departments} name="Кафедри" icon={studentSvg} />
      <NavItem path={routes.admin.heads} name="Голови кафедр" icon={userSvg} />
    </div>
    <div className="nav-section">
      <NavItem path={routes.admin.logout} name="Вихід" icon={exitSvg} />
    </div>
  </nav>
);

export default AdminNav;
