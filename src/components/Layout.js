import React, {
  useCallback,
  useState,
  Fragment,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from './Logo';
import routes from '../routes';

console.log('[routes]', routes);

const Layout = ({ children, navigation }) => {
  // const [animated, setAnimated] = useState(false);
  const [open, toggle] = useState(true);
  const menuToggle = useCallback(() => {
    toggle(prevState => !prevState);
  }, [open]);

  return (
    <Fragment>
      <header className="header">
        <Logo menuToggle={menuToggle} />
      </header>
      <aside className={classNames('sidebar', { 'sidebar--visible': open })}>
        <div className={classNames('sidebar-container', { 'sidebar-container--open': open })}>
          {navigation}
        </div>
      </aside>
      <main className={classNames('main-container', { 'is-open': open })}>
        {children}
      </main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  navigation: PropTypes.PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Layout;
