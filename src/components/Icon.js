import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ id, size }) {
  const sizes = size
    ? {
      width: size,
      height: size,
    }
    : {};

  return (
    <svg className="svg-icon" {...sizes}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '',
};
