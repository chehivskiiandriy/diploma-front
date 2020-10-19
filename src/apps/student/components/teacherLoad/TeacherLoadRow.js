import React from 'react';
import PropTypes from 'prop-types';

const TeacherLoadRow = ({ teacherLoad }) => (
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
  </tr>
);

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
};

export default TeacherLoadRow;
