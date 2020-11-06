import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteSpecialty } from '../../store/specialty/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_SPECIALTY_LOADING } from '../../../../store/loading/constants';

const DeleteSpecialtyModal = ({ isOpen, closeHandler, specialtyId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => (
    isTaskLoading(state, DELETE_SPECIALTY_LOADING)
  ));

  const onSubmit = async () => {
    await dispatch(deleteSpecialty(specialtyId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити спеціальність?</div>
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

DeleteSpecialtyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  specialtyId: PropTypes.number,
};

DeleteSpecialtyModal.defaultProps = {
  specialtyId: null,
};

export default DeleteSpecialtyModal;
