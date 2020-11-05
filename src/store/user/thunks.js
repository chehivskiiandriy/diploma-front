import {
  updateUser, successRecoverPassword, setVerifiedUser,
} from './actions';
import { CHANGE_PASSWORD_LOADING, LOGIN_LOADING, SIGNUP_LOADING } from '../loading/constants';
import { loadingThunk } from '../loading/thunks';
import { setToken, getToken, COOKIE_TOKEN_KEY } from '../../api/token';
import api from '../../api';

export const getUser = () => async dispatch => {
  try {
    const user = await api.get('users/current');

    dispatch(updateUser({ isLoaded: true, ...user }));
  } catch (e) {
    dispatch(updateUser({ isLoaded: true }));
  }
};

export const loginAction = params => async dispatch => {
  try {
    const { accessToken } = await api.post('auth/login', params);

    setToken(COOKIE_TOKEN_KEY, accessToken, { expires: 1 });
    dispatch(getUser());
  } catch (e) {
    //
  }
};

export const login = loadingThunk(LOGIN_LOADING)(loginAction);

export const checkToken = () => async dispatch => {
  try {
    const token = await getToken(COOKIE_TOKEN_KEY, false);

    if (!token) {
      dispatch(updateUser({ isLoaded: true }));
    } else {
      dispatch(getUser());
    }
  } catch (e) {
    dispatch(updateUser({ isLoaded: true }));
  }
};

export const resetPassword = params => async dispatch => {
  try {
    await api.post('auth/reset-password', params);
    dispatch(resetPassword());
  } catch (e) {
    console.log(e);
  }
};

export const recoverPassword = params => async dispatch => {
  try {
    await api.post('auth/recover-password', params);
    dispatch(successRecoverPassword());
  } catch (e) {
    console.log(e);
  }
};

export const changePasswordAction = params => async dispatch => {
  try {
    await api.post('auth/change-password', params);
  } catch (e) {
    //
  }
};

export const changePassword = loadingThunk(CHANGE_PASSWORD_LOADING)(changePasswordAction);

export const verifyUserAction = params => async dispatch => {
  try {
    const data = await api.post('auth/verify', params);
    dispatch(setVerifiedUser({ ...data.user, verified: data.verified }));
  } catch (e) {
    console.log(e);
  }
};

export const verifyUser = loadingThunk(SIGNUP_LOADING)(verifyUserAction);

export const signUp = params => async dispatch => {
  try {
    await api.post('auth/sign-up', params);
    dispatch(successRecoverPassword());
  } catch (e) {
    console.log(e);
  }
};
