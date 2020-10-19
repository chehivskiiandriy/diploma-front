import api from '../../../../api';
import { setThemes } from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import { GET_THEMES_LOADING } from '../../../../store/loading/constants';

export const getThemesAction = () => async dispatch => {
  try {
    const data = await api.get('/theme');

    dispatch(setThemes(data));
  } catch (e) {
    //
  }
};

export const getThemes = loadingThunk(GET_THEMES_LOADING)(getThemesAction);
