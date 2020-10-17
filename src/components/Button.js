import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  type, mode, size, disabled, widthAuto, fullWidth,
  className, label, children, ...customProps
}) => {
  const classes = classNames('button', {
    [`button--${mode}`]: mode,
    [`button--${size}`]: size,
    'is-disabled': disabled,
    'button--width-auto': widthAuto,
    'button--full-width': fullWidth,
    [className]: className,
  });

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={label}
      {...customProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  widthAuto: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,

};

Button.defaultProps = {
  type: 'button',
  mode: '',
  size: '',
  disabled: false,
  widthAuto: false,
  fullWidth: false,
  children: null,
  className: '',
};

export default Button;
