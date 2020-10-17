import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../../store/auth/thunks';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { isTaskLoading } from '../../../store/loading/selectors';
import { ADMIN_LOGIN_LOADING } from '../../../store/loading/constants';
import useFormErrors from '../../../hooks/useFormErrors';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => isTaskLoading(state, ADMIN_LOGIN_LOADING));
  const {
    handleSubmit, register, errors,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  const onSubmit = async data => {
    dispatch(login(data));
  };

  return (
    <div className="indent-xl-bottom indent-xl-top indent-xl-left indent-xl-right">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="username"
            name="username"
            ref={register({
              required: 'Будь ласка, введіть username',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний username',
            })}
            errors={errors}
            label="Username"
            placeholder="Введіть username"
            autoFocus
          />
          <Input
            id="password"
            name="password"
            ref={register({
              required: 'Будь ласка, введіть пароль',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний пароль',
            })}
            errors={errors}
            label="Пароль"
            placeholder="Введіть пароль"
          />
        </div>
        <div>
          <Button
            type="submit"
            mode="primary"
            label="Submit"
            disabled={disabled}
          >
            Ввійти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
