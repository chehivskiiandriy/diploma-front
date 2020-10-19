import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { isPasswordRecovered, userVerified } from '../../../store/user/selectors';
import { isTaskLoading } from '../../../store/loading/selectors';
import { SIGNUP_LOADING } from '../../../store/loading/constants';
import useFormErrors from '../../../hooks/useFormErrors';
import { signUp, verifyUser } from '../../../store/user/thunks';
import routes from '../../../routes';
import loaderSrc from '../../../assets/icons/loader.svg';
import Icon from '../../../components/Icon';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => isTaskLoading(state, SIGNUP_LOADING));
  const passwordRecovered = useSelector(isPasswordRecovered);
  const verifiedUser = useSelector(userVerified);
  const {
    handleSubmit, register, errors,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  useEffect(() => {
    const { search } = history.location;
    const token = search.split('?token=')[1];
    if (token) {
      dispatch(verifyUser({ token }));
    }
  }, []);

  const onSubmit = async data => {
    if (data.prepassword !== data.password) {
      return;
    }
    const { search } = history.location;
    const token = search.split('?token=')[1];
    if (token) {
      dispatch(signUp({ password: data.password, token }));
    }
  };

  if (passwordRecovered) {
    history.replace(routes.login);
  }

  console.log('VERIFIED USER', verifiedUser);

  return (
    <div className="authForm">
      <h1>Реєстрація</h1>
      {
        verifiedUser && (
          <>
            <p>
              Вітаємо,
              {' '}
              {verifiedUser.lastName}
              {' '}
              {verifiedUser.firstName}
              {' '}
              {verifiedUser.middleName}
            </p>
            <p>Для активації профілю введіть пароль</p>
          </>
        )
      }
      {loading && <div className="loader"><Icon id={loaderSrc.id} size="30px" /></div>}
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
            Активувати
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
