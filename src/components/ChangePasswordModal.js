import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import Modal from './Modal';
import { changePassword } from '../store/user/thunks';
import useFormErrors from '../hooks/useFormErrors';
import { isTaskLoading } from '../store/loading/selectors';
import { CHANGE_PASSWORD_LOADING } from '../store/loading/constants';

const ChangePasswordModal = ({ isOpen, closeHandler }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => (
    isTaskLoading(state, CHANGE_PASSWORD_LOADING)
  ));
  const { handleSubmit, register, errors } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  const onSubmit = async params => {
    await dispatch(changePassword(params));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            Змінити пароль
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="oldPassword"
            name="oldPassword"
            ref={register({
              required: 'Будь ласка, введіть старий пароль',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний старий пароль',
            })}
            errors={errors}
            label="Старий пароль"
            placeholder="Введіть старий пароль"
            autoFocus
          />
          <Input
            id="password"
            name="password"
            ref={register({
              required: 'Будь ласка, введіть новий пароль',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний новий пароль',
            })}
            errors={errors}
            label="Новий пароль"
            placeholder="Введіть новий пароль"
          />
        </div>
        <div className="modal-footer">
          <Button
            type="submit"
            mode="primary"
            label="Submit"
            disabled={disabled}
          >
            Змінити
          </Button>
        </div>
      </form>
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default ChangePasswordModal;
