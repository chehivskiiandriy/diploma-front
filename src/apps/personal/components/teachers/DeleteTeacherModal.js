import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteTeacher } from '../../store/teacher/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_TEACHER_LOADING } from '../../../../store/loading/constants';

const DeleteTeacherModal = ({ isOpen, closeHandler, teacherId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => isTaskLoading(state, DELETE_TEACHER_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteTeacher(teacherId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити викладача?</div>
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

DeleteTeacherModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  teacherId: PropTypes.number,
};

DeleteTeacherModal.defaultProps = {
  teacherId: null,
};

export default DeleteTeacherModal;
