import api from '../../../../api';
import {
  setThemes,
  setThemeApprove,
  setThemeDecline,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_THEMES_LOADING,
  APPROVE_THEME_LOADING,
  DECLINE_THEME_LOADING,
} from '../../../../store/loading/constants';

export const getThemesAction = () => async dispatch => {
  try {
    const data = await api.get('/theme');

    dispatch(setThemes(data));
  } catch (e) {
    //
  }
};

export const getThemes = loadingThunk(GET_THEMES_LOADING)(getThemesAction);

export const approveThemeAction = id => async dispatch => {
  try {
    await api.put(`/theme/${id}/approve`);

    dispatch(setThemeApprove(id));
  } catch (e) {
    //
  }
};

export const approveTheme = loadingThunk(APPROVE_THEME_LOADING)(approveThemeAction);

export const declineThemeAction = id => async dispatch => {
  try {
    await api.put(`/theme/${id}/decline`);

    dispatch(setThemeDecline(id));
  } catch (e) {
    //
  }
};

export const declineTheme = loadingThunk(DECLINE_THEME_LOADING)(declineThemeAction);
