import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const DepartmentRow = ({ department, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(department);
  }, [department]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(department.id);
  }, [department]);

  return (
    <tr className="tr">
      <td className="td">
        {department.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити кафедру"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити кафедру"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

DepartmentRow.propTypes = {
  department: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default DepartmentRow;
