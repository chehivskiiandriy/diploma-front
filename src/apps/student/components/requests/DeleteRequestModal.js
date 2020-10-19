import React from 'react';
import PropTypes from 'prop-types';

import { useStudentDispatch, useStudentSelector } from '../../store/context';
import { deleteRequest } from '../../store/request/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_REQUEST_LOADING } from '../../../../store/loading/constants';

const DeleteRequestModal = ({ isOpen, closeHandler, requestId }) => {
  const dispatch = useStudentDispatch();
  const loading = useStudentSelector(state => isTaskLoading(state, DELETE_REQUEST_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteRequest(requestId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити заявку?</div>
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

DeleteRequestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  requestId: PropTypes.number,
};

DeleteRequestModal.defaultProps = {
  requestId: null,
};

export default DeleteRequestModal;
