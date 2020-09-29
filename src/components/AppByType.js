import React from 'react';

import SwitchByRole from './SwitchByRole';
import { PersonalApp, TeacherApp, StudentApp } from '../apps';
import { ROLES } from '../constants';

const AppByType = () => (
  <SwitchByRole>
    <PersonalApp type={ROLES.personal} />
    <TeacherApp type={ROLES.teacher} />
    <StudentApp type={ROLES.student} />
  </SwitchByRole>
);

export default AppByType;
