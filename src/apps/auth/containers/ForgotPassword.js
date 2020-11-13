import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { isTaskLoading } from '../../../store/loading/selectors';
import { LOGIN_LOADING } from '../../../store/loading/constants';
import useFormErrors from '../../../hooks/useFormErrors';
import routes from '../../../routes';
import { resetPassword } from '../../../store/user/thunks';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);
  const loading = useSelector(state => isTaskLoading(state, LOGIN_LOADING));
  const {
    handleSubmit, register, errors,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  const onSubmit = async data => {
    try {
      await dispatch(resetPassword(data));
      setSent(true);
    } catch (e) {
      //
    }
  };

  return (
    <div className="authForm">
      <h1>Забули пароль?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <Input
            id="email"
            name="email"
            ref={register({
              required: 'Будь ласка, введіть email',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний email',
            })}
            errors={errors}
            label="Email"
            placeholder="Введіть email"
            autoFocus
          />
        </div>
        {sent && (
          <div className="actions">
            <div>
              Перевірте електронну пошту
            </div>
          </div>
        )}
        <div className="actions">
          <Button
            type="submit"
            mode="primary"
            label="Submit"
            disabled={disabled || sent}
          >
            Скинути пароль
          </Button>
        </div>
        <div className="actions">
          <Link to={routes.login}>
            Вхід
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
