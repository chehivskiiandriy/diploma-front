import React from 'react';
import PropTypes from 'prop-types';

import { useTeacherDispatch, useTeacherSelector } from '../../store/context';
import { approveTheme } from '../../store/theme/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { APPROVE_THEME_LOADING } from '../../../../store/loading/constants';

const ApproveThemeModal = ({ isOpen, closeHandler, themeId }) => {
  const dispatch = useTeacherDispatch();
  const loading = useTeacherSelector(state => isTaskLoading(state, APPROVE_THEME_LOADING));

  const onSubmit = async () => {
    await dispatch(approveTheme(themeId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете підтвердити тему?</div>
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
            Підтвердити тему
          </Button>
        </div>
      </div>
    </Modal>
  );
};

ApproveThemeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  themeId: PropTypes.number,
};

ApproveThemeModal.defaultProps = {
  themeId: null,
};

export default ApproveThemeModal;
