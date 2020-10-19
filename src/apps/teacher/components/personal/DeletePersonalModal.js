import React from 'react';
import PropTypes from 'prop-types';

import { useTeacherSelector, useTeacherDispatch } from '../../store/context';
import { deletePersonal } from '../../store/personal/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_PERSONAL_LOADING } from '../../../../store/loading/constants';

const DeletePersonalModal = ({ isOpen, closeHandler, personalId }) => {
  const dispatch = useTeacherDispatch();
  const loading = useTeacherSelector(state => isTaskLoading(state, DELETE_PERSONAL_LOADING));

  const onSubmit = async () => {
    await dispatch(deletePersonal(personalId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити персонал?</div>
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

DeletePersonalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  personalId: PropTypes.number,
};

DeletePersonalModal.defaultProps = {
  personalId: null,
};

export default DeletePersonalModal;
