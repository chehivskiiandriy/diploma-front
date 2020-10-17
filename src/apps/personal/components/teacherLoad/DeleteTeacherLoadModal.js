import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteTeacherLoad } from '../../store/teacherLoad/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_TEACHER_LOAD_LOADING } from '../../../../store/loading/constants';

const DeleteTeacherLoadModal = ({ isOpen, closeHandler, teacherLoadId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => isTaskLoading(state, DELETE_TEACHER_LOAD_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteTeacherLoad(teacherLoadId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити навантаження?</div>
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

DeleteTeacherLoadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  teacherLoadId: PropTypes.number,
};

DeleteTeacherLoadModal.defaultProps = {
  teacherLoadId: null,
};

export default DeleteTeacherLoadModal;
