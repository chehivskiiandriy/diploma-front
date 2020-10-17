import React from 'react';
import PropTypes from 'prop-types';

import { useAdminDispatch, useAdminSelector } from '../../store/context';
import { deleteHead } from '../../store/head/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_HEAD_LOADING } from '../../../../store/loading/constants';

const DeleteHeadModal = ({ isOpen, closeHandler, headId }) => {
  const dispatch = useAdminDispatch();
  const loading = useAdminSelector(state => isTaskLoading(state, DELETE_HEAD_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteHead(headId));
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

DeleteHeadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  headId: PropTypes.number,
};

DeleteHeadModal.defaultProps = {
  headId: null,
};

export default DeleteHeadModal;
