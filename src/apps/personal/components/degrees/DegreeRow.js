import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const DegreeRow = ({ degree, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(degree);
  }, [degree]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(degree.id);
  }, [degree]);

  return (
    <tr className="tr">
      <td className="td">
        {degree.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити наукову ступінь"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити наукову ступінь"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

DegreeRow.propTypes = {
  degree: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default DegreeRow;
