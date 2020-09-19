import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';

const TeacherNav = () => (
  <div>
    <Link to={routes.home}>TH|Home</Link>
    <Link to={routes.login}>TH|Login</Link>
  </div>
);

export default TeacherNav;
