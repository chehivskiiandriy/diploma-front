import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteLaboratoryDirection } from '../../store/laboratoryDirection/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_LABORATORY_DIRECTION_LOADING } from '../../../../store/loading/constants';

const DeleteLaboratoryDirectionModal = ({ isOpen, closeHandler, laboratoryDirectionId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => (
    isTaskLoading(state, DELETE_LABORATORY_DIRECTION_LOADING)
  ));

  const onSubmit = async () => {
    await dispatch(deleteLaboratoryDirection(laboratoryDirectionId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити напрям лабораторії?</div>
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

DeleteLaboratoryDirectionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  laboratoryDirectionId: PropTypes.number,
};

DeleteLaboratoryDirectionModal.defaultProps = {
  laboratoryDirectionId: null,
};

export default DeleteLaboratoryDirectionModal;
