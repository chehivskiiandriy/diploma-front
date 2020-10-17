import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const AcademicDegreeRow = ({ academicDegree, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(academicDegree);
  }, [academicDegree]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(academicDegree.id);
  }, [academicDegree]);

  return (
    <tr className="tr">
      <td className="td">
        {academicDegree.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити академічний рівень"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити академічний рівень"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

AcademicDegreeRow.propTypes = {
  academicDegree: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default AcademicDegreeRow;
