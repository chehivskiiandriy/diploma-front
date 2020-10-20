import React from 'react';
import PropTypes from 'prop-types';

import { useTeacherDispatch, useTeacherSelector } from '../../store/context';
import { declineTheme } from '../../store/theme/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DECLINE_THEME_LOADING } from '../../../../store/loading/constants';

const DeclineThemeModal = ({ isOpen, closeHandler, themeId }) => {
  const dispatch = useTeacherDispatch();
  const loading = useTeacherSelector(state => isTaskLoading(state, DECLINE_THEME_LOADING));

  const onSubmit = async () => {
    await dispatch(declineTheme(themeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете відхилити тему?</div>
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
            Відхилити тему
          </Button>
        </div>
      </div>
    </Modal>
  );
};

DeclineThemeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  themeId: PropTypes.number,
};

DeclineThemeModal.defaultProps = {
  themeId: null,
};

export default DeclineThemeModal;
