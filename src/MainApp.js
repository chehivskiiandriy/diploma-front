import React, { useCallback, useState } from 'react';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';

import { Admin, User } from './modules';
import routes from './routes';

console.log('[routes]', routes);

const MainApp = () => {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  const checkPath = useCallback(
    (path) => matchPath(location.pathname, { path, exact: false }),
    [location],
  );

  // check if admin route and then render admin module else user module
  const math = checkPath(routes.admin.$root);
  if (math && !isAdminPage) {
    setIsAdminPage(true);
  }

  if (isAdminPage) {
    return <Admin />;
  }

  return <User />;
};

export default MainApp;
