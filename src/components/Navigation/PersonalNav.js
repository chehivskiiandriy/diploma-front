import React from 'react';

import NavItem from './NavItem';
import routes from '../../routes';

import userSvg from '../../assets/icons/user.svg';
import labSvg from '../../assets/icons/lab.svg';
import studentSvg from '../../assets/icons/student.svg';
import exitSvg from '../../assets/icons/exit.svg';

const StudentNav = () => (
  <nav className="nav">
    <div className="nav-section">
      <NavItem path={routes.personal.laboratories} name="Лабораторії" icon={labSvg} />
      <NavItem path={routes.personal.laboratoriesDirections} name="Напрямки лабораторій" icon={labSvg} />
      <NavItem path={routes.personal.degrees} name="Наукові ступені" icon={studentSvg} />
      <NavItem path={routes.personal.academicDegrees} name="Академічні рівні" icon={studentSvg} />
      <NavItem path={routes.personal.academicYears} name="Академічні роки" icon={studentSvg} />
      <NavItem path={routes.personal.groups} name="Групи" icon={labSvg} />
      <NavItem path={routes.personal.teacherLoad} name="Навантаження" icon={labSvg} />
      <NavItem path={routes.personal.students} name="Студенти" icon={studentSvg} />
      <NavItem path={routes.personal.teachers} name="Викладачі" icon={studentSvg} />
    </div>
    <div className="nav-section">
      <NavItem path={routes.home} name="Профіль" icon={userSvg} />
      <NavItem path={routes.logout} name="Вихід" icon={exitSvg} />
    </div>
  </nav>
);

export default StudentNav;
