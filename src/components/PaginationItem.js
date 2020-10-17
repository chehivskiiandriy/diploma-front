import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationItem = ({
  page, text, isActive, onClick,
}) => (
  <button
    type="button"
    className={classNames('pagination__item', {
      'is-active': isActive,
    })}
    data-page={page}
    onClick={onClick}
  >
    {text}
  </button>
);

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

PaginationItem.defaultProps = {
  isActive: false,
};

export default PaginationItem;
