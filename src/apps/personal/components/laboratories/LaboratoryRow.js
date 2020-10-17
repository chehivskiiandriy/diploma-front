import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const LaboratoryRow = ({ laboratory, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(laboratory);
  }, [laboratory]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(laboratory.id);
  }, [laboratory]);

  return (
    <tr className="tr">
      <td className="td">
        {laboratory.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити лабораторію"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити лабораторію"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

LaboratoryRow.propTypes = {
  laboratory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default LaboratoryRow;
