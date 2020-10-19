import React from 'react';
import PropTypes from 'prop-types';

import { useStudentDispatch, useStudentSelector } from '../../store/context';
import { createRequest } from '../../store/request/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { CREATE_REQUEST_LOADING } from '../../../../store/loading/constants';

const AddThemeRequestModal = ({ isOpen, closeHandler, themeId }) => {
  const dispatch = useStudentDispatch();
  const loading = useStudentSelector(state => isTaskLoading(state, CREATE_REQUEST_LOADING));

  const onSubmit = async () => {
    await dispatch(createRequest(themeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете подати заявку?</div>
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
            Подати
          </Button>
        </div>
      </div>
    </Modal>
  );
};

AddThemeRequestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  themeId: PropTypes.number,
};

AddThemeRequestModal.defaultProps = {
  themeId: null,
};

export default AddThemeRequestModal;
