import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../../store/user/thunks';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { isTaskLoading } from '../../../store/loading/selectors';
import { LOGIN_LOADING } from '../../../store/loading/constants';
import useFormErrors from '../../../hooks/useFormErrors';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => isTaskLoading(state, LOGIN_LOADING));
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
    <div className="login">
      <h1>Diploma System</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        <div className="actions">
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
