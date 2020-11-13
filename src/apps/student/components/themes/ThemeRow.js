import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import { useStudentSelector } from '../../store/context';
import { themeInfoExistSelector } from '../../store/themeInfo/selectors';

const ThemeRow = ({ theme, addHandler }) => {
  const themeInfoExist = useStudentSelector(themeInfoExistSelector);

  const openAddModal = useCallback(() => {
    addHandler(theme.id);
  }, [theme]);

  return (
    <tr className="tr">
      <td className="td">
        {theme.name}
      </td>
      <td className="td">
        {theme.teacher && `${theme.teacher.lastName} ${theme.teacher.firstName} ${theme.teacher.middleName}`}
      </td>
      <td className="td">
        {theme.student && `${theme.student.lastName} ${theme.student.firstName} ${theme.student.middleName}`}
      </td>
      <td className="td">
        {theme.isConfirmed ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        {theme.laboratoryDirection && theme.laboratoryDirection.name}
      </td>
      <td className="td">
        {!themeInfoExist && (
          <div className="actions">
            <Button
              size="sm"
              label="Подати заявку"
              onClick={openAddModal}
            >
              Подати заявку
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
};

ThemeRow.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    teacher: PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
    }).isRequired,
    student: PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
    }),
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
  }).isRequired,
  addHandler: PropTypes.func.isRequired,
};

export default ThemeRow;
