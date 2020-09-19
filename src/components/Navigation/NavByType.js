import React from 'react';

import NavSwitch from './NavSwitch';
import StudentNav from './StudentNav';
import TeacherNav from './TeacherNav';

import { ROLES } from '../../constants';

const NavByType = () => (
  <NavSwitch>
    <StudentNav type={ROLES.student} />
    <TeacherNav type={ROLES.teacher} />
  </NavSwitch>
);

export default NavByType;
