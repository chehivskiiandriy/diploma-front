import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const TeacherRow = ({ teacher, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(teacher);
  }, [teacher]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(teacher.id);
  }, [teacher]);

  return (
    <tr className="tr">
      <td className="td">
        {teacher.lastName}
      </td>
      <td className="td">
        {teacher.firstName}
      </td>
      <td className="td">
        {teacher.middleName}
      </td>
      <td className="td">
        {teacher.email}
      </td>
      <td className="td">
        {teacher.degree && teacher.degree.name}
      </td>
      <td className="td">
        {teacher.isActive ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити викладача"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити викладача"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

TeacherRow.propTypes = {
  teacher: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    degree: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TeacherRow;
