import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const HeadRow = ({ head, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(head);
  }, [head]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(head.id);
  }, [head]);

  return (
    <tr className="tr">
      <td className="td">
        {head.lastName}
      </td>
      <td className="td">
        {head.firstName}
      </td>
      <td className="td">
        {head.middleName}
      </td>
      <td className="td">
        {head.email}
      </td>
      <td className="td">
        {head.department && head.department.name}
      </td>
      <td className="td">
        {head.isActive ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити кафедру"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити кафедру"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

HeadRow.propTypes = {
  head: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default HeadRow;
