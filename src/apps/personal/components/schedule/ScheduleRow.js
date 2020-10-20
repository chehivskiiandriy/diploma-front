import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const ScheduleRow = ({ schedule, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(schedule);
  }, [schedule]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(schedule.id);
  }, [schedule]);

  return (
    <tr className="tr">
      <td className="td">
        {schedule.name}
      </td>
      <td className="td">
        {schedule.description}
      </td>
      <td className="td">
        {schedule.startDate}
      </td>
      <td className="td">
        {schedule.endDate}
      </td>
      <td className="td">
        {schedule.academicYear && schedule.academicYear.name}
      </td>
      <td className="td">
        {schedule.academicDegree && schedule.academicDegree.name}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити графік"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити графік"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

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
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default ScheduleRow;
