import { setAdminAuth } from './actions';
import { adminApi } from '../../api';
import { setToken, getToken, COOKIE_ADMIN_TOKEN_KEY } from '../../api/token';
import { loadingThunk } from '../loading/thunks';
import { ADMIN_LOGIN_LOADING } from '../loading/constants';

export const loginAction = params => async dispatch => {
  try {
    const { accessToken } = await adminApi.post('admin/login', params);

    setToken(COOKIE_ADMIN_TOKEN_KEY, accessToken, { expires: 1 });
    dispatch(setAdminAuth(!!accessToken));
  } catch (e) {
    dispatch(setAdminAuth(false));
  }
};

export const login = loadingThunk(ADMIN_LOGIN_LOADING)(loginAction);

// todo remove
export const checkToken = () => async dispatch => {
  try {
    const token = await getToken(COOKIE_ADMIN_TOKEN_KEY, false);

    if (!token) dispatch(setAdminAuth(false));

    const { isAuthorized } = await adminApi.get('admin/check');

    dispatch(setAdminAuth(isAuthorized));
  } catch (e) {
    dispatch(setAdminAuth(false));
  }
};
