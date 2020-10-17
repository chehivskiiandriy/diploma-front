import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = forwardRef(({
  id, name, errors, label, ...rest
}, ref) => (
  <div className="input-container">
    {label && (
      <label htmlFor={id} className="label">{label}</label>
    )}
    <input
      {...rest}
      id={id}
      name={name}
      ref={ref}
      className={classNames('input', { error: errors[name] })}
    />
    {errors[name] && errors[name].message && (
      <div className="error-message">{errors[name].message}</div>
    )}
  </div>
));

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape().isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
};

export default Input;
