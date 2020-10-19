import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const PersonalRow = ({ personal, editHandler, deleteHandler }) => {
  const openEditModal = useCallback(() => {
    editHandler(personal);
  }, [personal]);

  const openDeleteModal = useCallback(() => {
    deleteHandler(personal.id);
  }, [personal]);

  return (
    <tr className="tr">
      <td className="td">
        {personal.lastName}
      </td>
      <td className="td">
        {personal.firstName}
      </td>
      <td className="td">
        {personal.middleName}
      </td>
      <td className="td">
        {personal.email}
      </td>
      <td className="td">
        {personal.isActive ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Змінити персонал"
            onClick={openEditModal}
          >
            Змінити
          </Button>
          <Button
            size="sm"
            label="Видалити персонал"
            onClick={openDeleteModal}
          >
            Видалити
          </Button>
        </div>
      </td>
    </tr>
  );
};

PersonalRow.propTypes = {
  personal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default PersonalRow;
