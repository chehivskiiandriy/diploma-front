import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

// import Icon from '../Icon';

const NavItem = ({
  path, name, icon, exact,
}) => {
  const [{ x, tX, tY }, set] = useSpring(() => ({
    immediate: true,
    from: { x: 0, tX: -50, tY: -50 },
    to: { x: 1, tX: -50, tY: -50 },
    config: { duration: 400 },
  }));

  const onMouseDownHandler = (e) => {
    const { clientX, clientY } = e;
    const { top, left } = e.currentTarget.getBoundingClientRect();

    const vertical = clientX - left;
    const horizontal = clientY - top;

    set({
      immediate: false,
      reset: true,
      from: {
        x: 0,
        tX: horizontal,
        tY: vertical,
      },
      to: {
        x: 0.7,
        tX: horizontal,
        tY: vertical,
      },
    });
  };

  const handler = () => {
    set({
      immediate: false,
      from: {
        x: x.value,
      },
      to: {
        x: 1,
      },
    });
  };

  return (
    <NavLink to={path} exact={exact} className="nav-item" onClick={handler} onMouseDown={onMouseDownHandler}>
      {/* <div className="nav-icon">
        <Icon id={icon.id} />
      </div> */}
      <div className="nav-text">
        {name}
      </div>
      <animated.div
        className="nav-ripple"
        style={{
          background: x.interpolate({ range: [0, 0.7, 1], output: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.1)', 'transparent'] }),
          top: tX.interpolate(value => `${value}px`),
          left: tY.interpolate(value => `${value}px`),
          transform: x
            .interpolate({
              range: [0, 0.7, 1],
              output: [0, 6, 6],
            })
            .interpolate(value => `translate(-50%, -50%) scale(${value})`),
        }}
      />
    </NavLink>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  exact: PropTypes.bool,
};

NavItem.defaultProps = {
  exact: true,
};

export default NavItem;
