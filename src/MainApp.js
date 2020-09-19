import React, { useEffect, useCallback, useState, Fragment } from 'react';
import { matchPath } from 'react-router';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PageByRoute from './PageByRoute';
import NavByType from './components/Navigation/NavByType';
import NavItem from './components/Navigation/NavItem';
import Logo from './components/Logo';
import routes from './routes';
import { userRoleSelector } from './store/user/selectors';
import { ROLES } from './constants';

console.log('[routes]', routes);

const pathForCheckByRole = {
  [ROLES.student]: [
    routes.teacher.$root,
    routes.personal.$root,
    routes.head.$root,
  ],
  [ROLES.teacher]: [
    routes.student.$root,
    routes.personal.$root,
    routes.head.$root,
  ],
  [ROLES.head]: [
    routes.student.$root,
    routes.personal.$root,
  ],
  [ROLES.personal]: [
    routes.student.$root,
    routes.teacher.$root,
    routes.head.$root,
  ],
};

const navigationItems = [
  [
    {
      value: 'Лабораторії',
      path: '/laboratories',
      exact: true,
    },
    {
      value: 'Навантаження',
      path: '/load',
      exact: true,
    },
    {
      value: 'Дипломні роботи',
      path: '/diplomas',
      exact: true,
    },
    {
      value: 'Графік виконання',
      path: '/execution',
      exact: true,
    },
    {
      value: 'Дипломна робота',
      path: '/diploma',
      exact: true,
    },
  ],
  [
    {
      value: 'Профіль',
      path: '/',
      exact: true,
    },
    {
      value: 'Налаштування',
      path: '/settings',
      exact: true,
    },
    {
      value: 'Вихід',
      path: '/logout',
      exact: true,
    },
  ],
];

const MainApp = () => {
  const [animated, setAnimated] = useState(false);
  const [open, toggle] = useState(true);
  const menuToggle = useCallback(() => {
    toggle(prevState => !prevState);
  }, [open]);

  const location = useLocation();
  const history = useHistory();
  const userRole = useSelector(userRoleSelector);

  const checkPath = useCallback(
    (path) => matchPath(location.pathname, { path, exact: false }),
    [location],
  );

  useEffect(() => {
    const { pathname } = location;

    if (!userRole) {
      const math = matchPath(pathname, routes.login)
        || checkPath(routes.admin.$root);

      if (!math) {
        history.push(routes.login);
      }
    } else {
      const paths = pathForCheckByRole[userRole];
      const math = paths && paths.some(checkPath);
      // console.log('math', math);
      if (math) {
        history.push(routes.home);
      }
    }
  }, [location, userRole]);

  return (
    <Fragment>
      <header className="header">
        <Logo menuToggle={menuToggle} />
      </header>
      <aside className={classNames('sidebar', { 'sidebar--visible': open })}>
        <div className={classNames('sidebar-container', { 'sidebar-container--open': open })}>
          <nav className="nav">
            {navigationItems.map((section, index) => (
              <div className="nav-section" key={index}>
                {section.map(item => (
                  <NavItem key={item.value} item={item} />
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <NavByType />
      <div style={{ marginLeft: '260px', marginTop: '60px' }}>
        MainApp
        <Link to={routes.home}>Profile</Link>
        <Link to={routes.student.myTheme}>MyTheme</Link>
        <PageByRoute />
      </div>
    </Fragment>
  );
};

export default MainApp;
