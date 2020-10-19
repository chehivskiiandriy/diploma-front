import React from 'react';
import PropTypes from 'prop-types';

import { useTeacherDispatch, useTeacherSelector } from '../../store/context';
import { deleteMyTheme } from '../../store/myThemes/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_MY_THEMES_LOADING } from '../../../../store/loading/constants';

const DeleteMyThemeModal = ({ isOpen, closeHandler, themeId }) => {
  const dispatch = useTeacherDispatch();
  const loading = useTeacherSelector(state => isTaskLoading(state, DELETE_MY_THEMES_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteMyTheme(themeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити тему?</div>
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

DeleteMyThemeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  themeId: PropTypes.number,
};

DeleteMyThemeModal.defaultProps = {
  themeId: null,
};

export default DeleteMyThemeModal;
