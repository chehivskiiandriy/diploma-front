import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const TeacherLoadRow = ({ teacherLoad, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(teacherLoad);
  }, [teacherLoad]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(teacherLoad.id);
  }, [teacherLoad]);

  return (
    <tr className="tr">
      <td className="td">
        {teacherLoad.user && `${teacherLoad.user.lastName} ${teacherLoad.user.firstName} ${teacherLoad.user.middleName}`}
      </td>
      <td className="td">
        {teacherLoad.amount}
      </td>
      <td className="td">
        {teacherLoad.academicYear && teacherLoad.academicYear.name}
      </td>
      <td className="td">
        {teacherLoad.academicDegree && teacherLoad.academicDegree.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити навантаження"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити навантаження"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

TeacherLoadRow.propTypes = {
  teacherLoad: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
    }).isRequired,
    amount: PropTypes.number.isRequired,
    academicYear: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    academicDegree: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TeacherLoadRow;
