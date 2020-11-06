import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import toLocaleTime from '../../../../utils/toLocaleTime';

const StudentRow = ({ student, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(student);
  }, [student]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(student.id);
  }, [student]);

  const createdAt = useMemo(() => toLocaleTime(student.createdAt), [student.createdAt]);
  const updatedAt = useMemo(() => toLocaleTime(student.updatedAt), [student.updatedAt]);

  return (
    <tr className="tr">
      <td className="td">
        {student.lastName}
      </td>
      <td className="td">
        {student.firstName}
      </td>
      <td className="td">
        {student.middleName}
      </td>
      <td className="td">
        {student.email}
      </td>
      <td className="td">
        {student.group && student.group.name}
      </td>
      <td className="td">
        {student.isActive ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        {createdAt}
      </td>
      <td className="td">
        {updatedAt}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити студента"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити студента"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

StudentRow.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    group: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default StudentRow;
