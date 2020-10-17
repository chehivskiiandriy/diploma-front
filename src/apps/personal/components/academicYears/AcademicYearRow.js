import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const AcademicYearRow = ({ academicYear, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(academicYear);
  }, [academicYear]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(academicYear.id);
  }, [academicYear]);

  return (
    <tr className="tr">
      <td className="td">
        {academicYear.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити академічний рік"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити академічний рік"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

AcademicYearRow.propTypes = {
  academicYear: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default AcademicYearRow;
