import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import ReactSelect from './ReactSelect';

const errorStyles = {
  control: base => ({
    ...base,
    borderColor: '#ff4444',
    boxShadow: '0 0 0 1px #ff4444',
    '&:hover': {
      borderColor: '#ff4444',
      boxShadow: '0 0 0 1px #ff4444',
    },
  }),
};

const Select = ({
  name, errors, label, ...rest
}) => (
  <div className="select-container">
    {label && (
      <label htmlFor={name} className="label">{label}</label>
    )}
    <Controller
      {...rest}
      id={name}
      name={name}
      styles={errors[name] && errorStyles}
      as={ReactSelect}
    />
    {errors[name] && errors[name].message && (
      <div className="error-message">{errors[name].message}</div>
    )}
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape().isRequired,
  label: PropTypes.string,
};

Select.defaultProps = {
  label: '',
};

export default Select;
