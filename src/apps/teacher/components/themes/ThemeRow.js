import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const MyThemeRow = ({
  theme, isHead, approveHandler, declineHandler,
}) => {
  const openApproveModal = useCallback(() => {
    approveHandler(theme.id);
  }, [theme]);

  const openDeclineModal = useCallback(() => {
    declineHandler(theme.id);
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
        {theme.academicYear && theme.academicYear.name}
      </td>
      <td className="td">
        {theme.academicDegree && theme.academicDegree.name}
      </td>
      <td className="td">
        {theme.laboratoryDirection && theme.laboratoryDirection.name}
      </td>
      {isHead && (
        <td className="td">
          <div className="actions">
            <Button
              size="sm"
              label="Підтвердити"
              disabled={theme.isConfirmed}
              onClick={openApproveModal}
            >
              Підтвердити
            </Button>
            <Button
              size="sm"
              label="Видалити групу"
              disabled={!theme.isConfirmed}
              onClick={openDeclineModal}
            >
              Відхилити
            </Button>
          </div>
        </td>
      )}
    </tr>
  );
};

MyThemeRow.propTypes = {
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
  }).isRequired,
  isHead: PropTypes.bool.isRequired,
  approveHandler: PropTypes.func.isRequired,
  declineHandler: PropTypes.func.isRequired,
};

export default MyThemeRow;
