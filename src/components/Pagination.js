import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';

const START_PAGINATION = 1;
const END_AND_ELLIPSIS = 2;
const TWO_ENDS_AND_ELLIPSIS = 2 * END_AND_ELLIPSIS;

const severalTimes = length => {
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = index;
  }
  return result;
};

const Pagination = ({
  total, onChange, currentPage, perPage, showOne, maxItems,
}) => {
  const handleChange = useCallback(({ target: { dataset: { page } } }) => {
    onChange(+page);
  }, [currentPage]);

  const createItem = index => (
    <PaginationItem
      key={index}
      page={index}
      text={index}
      isActive={index === currentPage}
      onClick={handleChange}
    />
  );

  const content = () => {
    const endPagination = Math.ceil(total / perPage);
    const range = maxItems - TWO_ENDS_AND_ELLIPSIS;
    const offset = START_PAGINATION + Math.ceil(range / 2) + 1;

    if (endPagination <= START_PAGINATION && !showOne) {
      return null;
    }

    if (endPagination <= maxItems) {
      return severalTimes(endPagination).map(i => createItem(i + START_PAGINATION));
    }

    if (currentPage <= offset) {
      const subsequentItems = maxItems - END_AND_ELLIPSIS;
      const items = severalTimes(subsequentItems).map(i => createItem(i + START_PAGINATION));
      items.push(<PaginationItem key="forward" text="..." onClick={handleChange} page={currentPage + range} />);
      items.push(createItem(endPagination));
      return items;
    }

    if ((endPagination - currentPage) < offset) {
      const subsequentItems = maxItems - END_AND_ELLIPSIS;
      const items = [
        createItem(START_PAGINATION),
        <PaginationItem key="backward" text="..." onClick={handleChange} page={currentPage - range} />,
      ];
      return items
        .concat(severalTimes(subsequentItems)
          .map(i => createItem((endPagination - subsequentItems) + i + 1)));
    }

    return [
      createItem(START_PAGINATION),
      <PaginationItem key="backward" text="..." onClick={handleChange} page={currentPage - range} />,
      ...severalTimes(range).map(i => createItem((currentPage + i) - Math.floor(range / 2))),
      <PaginationItem key="forward" text="..." onClick={handleChange} page={currentPage + range} />,
      createItem(endPagination),
    ];
  };

  return (
    <div className="page-pagination">
      <nav className="pagination">
        {content()}
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  perPage: PropTypes.number,
  showOne: PropTypes.bool,
  maxItems: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  perPage: 10,
  showOne: true,
  maxItems: 7,
};

export default Pagination;
