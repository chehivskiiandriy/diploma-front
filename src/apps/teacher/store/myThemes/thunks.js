import api from '../../../../api';
import {
  setMyThemes,
  addMyTheme,
  updateMyTheme,
  removeMyTheme,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_MY_THEMES_LOADING,
  CREATE_MY_THEMES_LOADING,
  UPDATE_MY_THEMES_LOADING,
  DELETE_MY_THEMES_LOADING,
  ACCEPT_REQUEST_LOADING,
  DELETE_REQUEST_LOADING, DECLINE_REQUEST_LOADING
} from '../../../../store/loading/constants';

export const getMyThemesAction = () => async dispatch => {
  try {
    const data = await api.get('/theme/my');

    dispatch(setMyThemes(data));
  } catch (e) {
    //
  }
};

export const getMyThemes = loadingThunk(GET_MY_THEMES_LOADING)(getMyThemesAction);

export const createMyThemeAction = params => async dispatch => {
  try {
    const data = await api.post('/theme', params);

    dispatch(addMyTheme(data));
  } catch (e) {
    //
  }
};

export const createMyTheme = loadingThunk(CREATE_MY_THEMES_LOADING)(createMyThemeAction);

export const editMyThemeAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/theme/${id}`, params);

    dispatch(updateMyTheme(data));
  } catch (e) {
    //
  }
};

export const editMyTheme = loadingThunk(UPDATE_MY_THEMES_LOADING)(editMyThemeAction);

export const deleteMyThemeAction = id => async dispatch => {
  try {
    await api.delete(`/theme/${id}`);

    dispatch(removeMyTheme(id));
  } catch (e) {
    //
  }
};

export const deleteMyTheme = loadingThunk(DELETE_MY_THEMES_LOADING)(deleteMyThemeAction);

export const acceptRequestAction = id => async dispatch => {
  try {
    await api.put(`/request/${id}`, { status: 'CONFIRMED' });

    dispatch(getMyThemesAction());
  } catch (e) {
    //
  }
};

export const acceptRequest = loadingThunk(ACCEPT_REQUEST_LOADING)(acceptRequestAction);

export const declineRequestAction = id => async dispatch => {
  try {
    await api.put(`/request/${id}`, { status: 'REJECTED' });

    // dispatch(getMyThemesAction());
  } catch (e) {
    //
  }
};

export const declineRequest = loadingThunk(DECLINE_REQUEST_LOADING)(declineRequestAction);
