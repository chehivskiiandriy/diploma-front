import React from 'react';

import SwitchByRole from '../SwitchByRole';
import StudentNav from './StudentNav';
import TeacherNav from './TeacherNav';
import PersonalNav from './PersonalNav';

import { ROLES } from '../../constants';

const NavByType = () => (
  <SwitchByRole>
    <PersonalNav type={ROLES.personal} />
    <StudentNav type={ROLES.student} />
    <TeacherNav type={ROLES.teacher} />
  </SwitchByRole>
);

export default NavByType;
