import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import toLocaleTime from '../../../../utils/toLocaleTime';

const ThemeRow = ({ theme }) => {
  const createdAt = useMemo(() => toLocaleTime(theme.createdAt), [theme.createdAt]);
  const updatedAt = useMemo(() => toLocaleTime(theme.updatedAt), [theme.updatedAt]);

  return (
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
      <td className="td">
        {createdAt}
      </td>
      <td className="td">
        {updatedAt}
      </td>
    </tr>
  );
};

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
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThemeRow;
