import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';

const StudentNav = () => (
  <div>
    <Link to={routes.home}>ST|Home</Link>
    <Link to={routes.student.myTheme}>ST|My theme</Link>
  </div>
);

export default StudentNav;
