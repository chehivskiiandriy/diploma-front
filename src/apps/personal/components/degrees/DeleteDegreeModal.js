import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteDegree } from '../../store/degree/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_DEGREE_LOADING } from '../../../../store/loading/constants';

const DeleteDegreeModal = ({ isOpen, closeHandler, degreeId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => isTaskLoading(state, DELETE_DEGREE_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteDegree(degreeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити наукову ступінь?</div>
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

DeleteDegreeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  degreeId: PropTypes.number,
};

DeleteDegreeModal.defaultProps = {
  degreeId: null,
};

export default DeleteDegreeModal;
