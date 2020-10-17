import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteAcademicDegree } from '../../store/academicDegree/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_ACADEMIC_DEGREE_LOADING } from '../../../../store/loading/constants';

const DeleteAcademicDegreeModal = ({ isOpen, closeHandler, academicDegreeId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => (
    isTaskLoading(state, DELETE_ACADEMIC_DEGREE_LOADING)
  ));

  const onSubmit = async () => {
    await dispatch(deleteAcademicDegree(academicDegreeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити академічний рівень?</div>
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

DeleteAcademicDegreeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  academicDegreeId: PropTypes.number,
};

DeleteAcademicDegreeModal.defaultProps = {
  academicDegreeId: null,
};

export default DeleteAcademicDegreeModal;
