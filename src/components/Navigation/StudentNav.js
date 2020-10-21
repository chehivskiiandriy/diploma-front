import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import labSvg from '../../assets/icons/lab.svg';
import newspaperSvg from '../../assets/icons/newspaper.svg';
import exitSvg from '../../assets/icons/exit.svg';

const StudentNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.student.themes} name="Теми" icon={newspaperSvg} />
      <NavItem path={routes.student.requests} name="Заявки" icon={newspaperSvg} />
      <NavItem path={routes.student.myTheme} name="Моя тема" icon={newspaperSvg} />
      <NavItem path={routes.student.schedule} name="Графік виконання" icon={labSvg} />
      <NavItem path={routes.student.teacherLoad} name="Навантаження" icon={labSvg} />
    </div>
    <div className="nav-section">
      <NavItem path={routes.home} name="Профіль" icon={userSvg} />
      <NavItem path={routes.logout} name="Вихід" icon={exitSvg} />
    </div>
  </nav>
);

export default StudentNav;
