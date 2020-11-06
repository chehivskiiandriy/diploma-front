import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const SpecialtyRow = ({ specialty, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(specialty);
  }, [specialty]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(specialty.id);
  }, [specialty]);

  return (
    <tr className="tr">
      <td className="td">
        {specialty.number}
      </td>
      <td className="td">
        {specialty.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити спеціальність"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити спеціальність"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

SpecialtyRow.propTypes = {
  specialty: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default SpecialtyRow;
