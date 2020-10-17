import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { isPasswordRecovered } from '../../../store/user/selectors';
import { isTaskLoading } from '../../../store/loading/selectors';
import { LOGIN_LOADING } from '../../../store/loading/constants';
import useFormErrors from '../../../hooks/useFormErrors';
import { recoverPassword } from '../../../store/user/thunks';
import routes from '../../../routes';

const RecoverPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => isTaskLoading(state, LOGIN_LOADING));
  const passwordRecovered = useSelector(isPasswordRecovered);
  const {
    handleSubmit, register, errors,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  const onSubmit = async data => {
    if (data.prepassword !== data.password) {
      return;
    }
    const { search } = history.location;
    const token = search.split('?token=')[1];
    if (token) {
      dispatch(recoverPassword({ password: data.password, token }));
    }
  };

  if (passwordRecovered) {
    history.replace(routes.login);
  }

  return (
    <div className="authForm">
      <h1>Відновлення паролю</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <Input
            id="prepassword"
            name="prepassword"
            ref={register({
              required: 'Будь ласка, введіть пароль',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний пароль',
            })}
            errors={errors}
            label="Пароль"
            placeholder="Введіть пароль"
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
            label="Підтвердіть пароль"
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
            Відновити пароль
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
