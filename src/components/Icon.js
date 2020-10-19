import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ id, size }) {
  return (
    <svg className="svg-icon" width={size} height={size}>
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
