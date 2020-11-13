import React from 'react';
import PropTypes from 'prop-types';

import { useTeacherDispatch, useTeacherSelector } from '../../store/context';
import { acceptRequest, declineRequest } from '../../store/myThemes/thunks';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import FormattedDate from './FormattedDate';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { ACCEPT_REQUEST_LOADING, DECLINE_REQUEST_LOADING } from '../../../../store/loading/constants';

const RequestsModal = ({ isOpen, closeHandler, requests }) => {
  const dispatch = useTeacherDispatch();
  const loadingAccept = useTeacherSelector(state => isTaskLoading(state, ACCEPT_REQUEST_LOADING));
  const loadingDecline = useTeacherSelector(state => isTaskLoading(state, DECLINE_REQUEST_LOADING));

  const onAccept = async requestId => {
    await dispatch(acceptRequest(requestId));
    closeHandler();
  };

  const onDecline = async requestId => {
    await dispatch(declineRequest(requestId));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <header className="modal-header">
        <h2>
          Заявки
        </h2>
      </header>
      <div className="modal-body">
        {requests && requests.map(el => (
          <div key={el.id} className="actions actions--requests actions--align-center actions--justify-center indent-sm-bottom">
            <div>
              <div>
                {el.student.lastName}
                &nbsp;
                {el.student.firstName}
                &nbsp;
                {el.student.middleName}
                &nbsp;
                {el.student.group.name}
              </div>
              <FormattedDate>
                {el.createdAt}
              </FormattedDate>
            </div>
            <div>
              <Button
                label="Відхилити"
                size="sm"
                disabled={loadingAccept || loadingDecline}
                onClick={() => onDecline(el.id)}
              >
                Відхилити
              </Button>
              <Button
                mode="primary"
                label="Прийняти"
                size="sm"
                disabled={loadingAccept || loadingDecline}
                onClick={() => onAccept(el.id)}
              >
                Прийняти
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

RequestsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.object),
};

RequestsModal.defaultProps = {
  requests: [],
};

export default RequestsModal;
