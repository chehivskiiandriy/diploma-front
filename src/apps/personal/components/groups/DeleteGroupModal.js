import React from 'react';
import PropTypes from 'prop-types';

import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { deleteGroup } from '../../store/group/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { DELETE_GROUP_LOADING } from '../../../../store/loading/constants';

const DeleteGroupModal = ({ isOpen, closeHandler, groupId }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => isTaskLoading(state, DELETE_GROUP_LOADING));

  const onSubmit = async () => {
    await dispatch(deleteGroup(groupId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} size="sm" withCloseButton>
      <div className="modal-body">
        <div>Ви впевнені що хочете видалити групу?</div>
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

DeleteGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  groupId: PropTypes.number,
};

DeleteGroupModal.defaultProps = {
  groupId: null,
};

export default DeleteGroupModal;
