import api from '../../../../api';
import { setThemeInfo } from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import { GET_THEME_INFO_LOADING } from '../../../../store/loading/constants';

export const getThemeInfoAction = () => async dispatch => {
  try {
    const data = await api.get('/theme/student/my');

    dispatch(setThemeInfo(data));
  } catch (e) {
    //
  }
};

export const getThemeInfo = loadingThunk(GET_THEME_INFO_LOADING)(getThemeInfoAction);
