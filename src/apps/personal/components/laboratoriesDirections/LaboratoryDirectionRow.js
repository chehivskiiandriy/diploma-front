import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const LaboratoryDirectionRow = ({ laboratoryDirection, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(laboratoryDirection);
  }, [laboratoryDirection]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(laboratoryDirection.id);
  }, [laboratoryDirection]);

  return (
    <tr className="tr">
      <td className="td">
        {laboratoryDirection.name}
      </td>
      <td className="td">
        {laboratoryDirection.laboratory && laboratoryDirection.laboratory.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити напрям лабораторії"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити напрям лабораторії"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

LaboratoryDirectionRow.propTypes = {
  laboratoryDirection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    laboratory: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default LaboratoryDirectionRow;
