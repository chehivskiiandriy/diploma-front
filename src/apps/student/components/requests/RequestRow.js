import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import toLocaleTime from '../../../../utils/toLocaleTime';

const RequestRow = ({ request, deleteHandler }) => {
  const openDeleteModal = useCallback(() => {
    deleteHandler(request.id);
  }, [request]);

  const createdAt = useMemo(() => toLocaleTime(request.createdAt), [request.createdAt]);

  return (
    <tr className="tr">
      <td className="td">
        {request.statusInfo}
      </td>
      <td className="td">
        {request.theme.name}
      </td>
      <td className="td">
        {request.theme.teacher && `${request.theme.teacher.lastName} ${request.theme.teacher.firstName} ${request.theme.teacher.middleName}`}
      </td>
      <td className="td">
        {request.theme.isConfirmed ? 'Так' : 'Ні'}
      </td>
      <td className="td">
        {request.theme.laboratoryDirection && request.theme.laboratoryDirection.name}
      </td>
      <td className="td">
        {createdAt}
      </td>
      <td className="td">
        <div className="actions">
          <Button
            size="sm"
            label="Видалити заявку"
            onClick={openDeleteModal}
          >
            Видалити заявку
          </Button>
        </div>
      </td>
    </tr>
  );
};

RequestRow.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    statusInfo: PropTypes.string.isRequired,
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
      laboratoryDirection: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default RequestRow;
