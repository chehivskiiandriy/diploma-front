import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteAcademicYear } from '../../store/academicYear/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_ACADEMIC_YEAR_LOADING } from '../../../../store/loading/constants';

const DeleteAcademicYearModal = ({ isOpen, closeHandler, academicYearId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => (
    isTaskLoading(state, DELETE_ACADEMIC_YEAR_LOADING)
  ));

  const onSubmit = async () => {
    await dispatch(deleteAcademicYear(academicYearId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити академічний рік?</div>
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

DeleteAcademicYearModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  academicYearId: PropTypes.number,
};

DeleteAcademicYearModal.defaultProps = {
  academicYearId: null,
};

export default DeleteAcademicYearModal;
