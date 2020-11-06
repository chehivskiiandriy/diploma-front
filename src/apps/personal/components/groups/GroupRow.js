import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import toLocaleTime from '../../../../utils/toLocaleTime';

const GroupRow = ({ group, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(group);
  }, [group]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(group.id);
  }, [group]);

  const createdAt = useMemo(() => toLocaleTime(group.createdAt), [group.createdAt]);
  const updatedAt = useMemo(() => toLocaleTime(group.updatedAt), [group.updatedAt]);

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
        {group.specialty && `${group.specialty.number} - ${group.specialty.name}`}
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
    specialty: PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default GroupRow;
