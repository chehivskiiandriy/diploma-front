import React from 'react';
import { useSelector } from 'react-redux';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import labSvg from '../../assets/icons/lab.svg';
import exitSvg from '../../assets/icons/exit.svg';
import themeSvg from '../../assets/icons/newspaper.svg';

import { isHeadSelector } from '../../store/user/selectors';

const TeacherNav = () => {
  const isHead = useSelector(isHeadSelector);

  return (
    <nav className="nav">
      <div className="nav-section">
        <NavItem path={routes.teacher.myThemes} name="Мої теми" icon={userSvg} />
        <NavItem path={routes.teacher.themes} name="Теми" icon={themeSvg} />
        {isHead && <NavItem path={routes.head.personal} name="Персонал" icon={userSvg} />}
        <NavItem path={routes.teacher.schedule} name="Графік виковання" icon={labSvg} />
        <NavItem path={routes.teacher.teacherLoad} name="Навантаження" icon={labSvg} />
      </div>
      <div className="nav-section">
        <NavItem path={routes.home} name="Профіль" icon={userSvg} />
        <NavItem path={routes.logout} name="Вихід" icon={exitSvg} />
      </div>
    </nav>
  );
};

export default TeacherNav;
