import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Link = ({
  href, to, className, children, ...customProps
}) => {
  const classes = classNames('link', {
    [className]: className,
  });

  return href
    ? (
      <a
        href={href}
        className={classes}
        {...customProps}
      >
        {children}
      </a>
    )
    : (
      <span className={classes}>
        <NavLink to={to} exact>
          {children}
        </NavLink>
      </span>
    );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Link.defaultProps = {
  href: '',
  to: '',
  children: null,
  className: '',
};

export default Link;
