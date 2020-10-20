import React from 'react';
import PropTypes from 'prop-types';

const ScheduleRow = ({ schedule }) => (
  <tr className="tr">
    <td className="td">
      {schedule.name}
    </td>
    <td className="td">
      {schedule.startDate}
    </td>
    <td className="td">
      {schedule.endDate}
    </td>
    <td className="td">
      {schedule.description}
    </td>
    <td className="td">
      {schedule.academicYear && schedule.academicYear.name}
    </td>
    <td className="td">
      {schedule.academicDegree && schedule.academicDegree.name}
    </td>
  </tr>
);

ScheduleRow.propTypes = {
  schedule: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
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

export default ScheduleRow;
