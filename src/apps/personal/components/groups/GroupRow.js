import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const GroupRow = ({ group, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(group);
  }, [group]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(group.id);
  }, [group]);

  return (
    <tr className="tr">
      <td className="td">
        {group.name}
      </td>
      <td className="td">
        {group.amountStudents}
      </td>
      <td className="td">
        {group.academicYear && group.academicYear.name}
      </td>
      <td className="td">
        {group.academicDegree && group.academicDegree.name}
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

GroupRow.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amountStudents: PropTypes.number.isRequired,
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

export default GroupRow;
