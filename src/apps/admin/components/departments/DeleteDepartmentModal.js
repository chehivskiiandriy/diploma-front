import React from 'react';
import PropTypes from 'prop-types';

import { useAdminDispatch, useAdminSelector } from '../../store/context';
import { deleteDepartment } from '../../store/department/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_DEPARTMENT_LOADING } from '../../../../store/loading/constants';

const DeleteDepartmentModal = ({ isOpen, closeHandler, departmentId }) => {
  const dispatch = useAdminDispatch();
  const loading = useAdminSelector(state => isTaskLoading(state, DELETE_DEPARTMENT_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteDepartment(departmentId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити кафедру?</div>
      </div>
      <div className="modal-footer modal-footer--center">
        <div className="actions">
          <Button
            label="Відмінити"
            onClick={closeHandler}
          >
            Відмінити
          </Button>
          <Button
            mode="primary"
            label="Видалити"
            disabled={loading}
            onClick={onSubmit}
          >
            Видалити
          </Button>
        </div>
      </div>
    </Modal>
  );
};

DeleteDepartmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  departmentId: PropTypes.number,
};

DeleteDepartmentModal.defaultProps = {
  departmentId: null,
};

export default DeleteDepartmentModal;
