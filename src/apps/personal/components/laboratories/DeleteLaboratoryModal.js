import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteLaboratory } from '../../store/laboratory/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_LABORATORY_LOADING } from '../../../../store/loading/constants';

const DeleteLaboratoryModal = ({ isOpen, closeHandler, laboratoryId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => isTaskLoading(state, DELETE_LABORATORY_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteLaboratory(laboratoryId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити лабораторію?</div>
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

DeleteLaboratoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  laboratoryId: PropTypes.number,
};

DeleteLaboratoryModal.defaultProps = {
  laboratoryId: null,
};

export default DeleteLaboratoryModal;
