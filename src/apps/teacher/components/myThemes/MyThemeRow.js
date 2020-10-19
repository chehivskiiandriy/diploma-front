import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const MyThemeRow = ({
  theme, editHandler, deleteHandler, openRequests, openDeleteStudent,
}) => {
  const openEditModal = useCallback(() => {
    editHandler(theme);
  }, [theme]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(theme.id);
  }, [theme]);

  const openRequestsModal = useCallback(() => {
    openRequests(theme.requests);
  }, [theme]);

  const openDeleteStudentModal = useCallback(() => {
    openDeleteStudent(theme.id);
  }, [theme]);

  return (
    <tr className="tr">
      <td className="td">
        {theme.name}
      </td>
      <td className="td">
        {theme.student && `${theme.student.lastName} ${theme.student.firstName} ${theme.student.middleName}`}
        {theme.student && (
          <Button
            size="sm"
            label="Видалити студента"
            onClick={openDeleteStudentModal}
          >
            Видалити
          </Button>
        )}
      </td>
      <td className="td">
        {theme.isConfirmed ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        {theme.academicYear && theme.academicYear.name}
      </td>
      <td className="td">
        {theme.academicDegree && theme.academicDegree.name}
      </td>
      <td className="td">
        {theme.laboratoryDirection && theme.laboratoryDirection.name}
      </td>
      <td className="td">
        {!theme.student && theme.requests && (
          <Button
            size="sm"
            label="Заявки"
            disabled={theme.requests.length === 0}
            onClick={openRequestsModal}
          >
            Заявки (
            {theme.requests.length}
            )
          </Button>
        )}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити групу"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити групу"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

MyThemeRow.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    student: PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
    }).isRequired,
    academicYear: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    academicDegree: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    laboratoryDirection: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    requests: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  openRequests: PropTypes.func.isRequired,
  openDeleteStudent: PropTypes.func.isRequired,
};

export default MyThemeRow;
