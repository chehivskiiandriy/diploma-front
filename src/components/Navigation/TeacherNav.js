import React from 'react';
import { useSelector } from 'react-redux';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import exitSvg from '../../assets/icons/exit.svg';
import { isHeadSelector } from '../../store/user/selectors';

const TeacherNav = () => {
  const isHead = useSelector(isHeadSelector);

  return (
    <nav className="nav">
      <div className="nav-section">
        <NavItem path={routes.teacher.myThemes} name="Мої теми" icon={userSvg} />
        {isHead && <NavItem path={routes.head.personal} name="Персонал" icon={userSvg} />}
      </div>
      <div className="nav-section">
        <NavItem path={routes.home} name="Профіль" icon={userSvg} />
        <NavItem path={routes.logout} name="Вихід" icon={exitSvg} />
      </div>
    </nav>
  );
};

export default TeacherNav;
