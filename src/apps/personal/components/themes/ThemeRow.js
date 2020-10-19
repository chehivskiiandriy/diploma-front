import React from 'react';
import PropTypes from 'prop-types';

const ThemeRow = ({ theme }) => (
  <tr className="tr">
    <td className="td">
      {theme.name}
    </td>
    <td className="td">
      {theme.teacher.lastName}
    </td>
    <td className="td">
      {theme.student && theme.student.lastName}
    </td>
    <td className="td">
      {theme.academicYear && theme.academicYear.name}
    </td>
    <td className="td">
      {theme.academicDegree && theme.academicDegree.name}
    </td>
    <td className="td">
      {theme.isConfirmed ? 'Так' : 'Ні'}
    </td>
  </tr>
);

const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
});

ThemeRow.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    teacher: UserType.isRequired,
    student: UserType,
    academicYear: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    academicDegree: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    isConfirmed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ThemeRow;
