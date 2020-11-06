import api from '../../../../api';
import { setThemes } from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import { DOWNLOAD_THEMES_LOADING, GET_THEMES_LOADING } from '../../../../store/loading/constants';
import { toBlob } from '../../../../api/helpers';
import download from '../../../../utils/download';

export const getThemesAction = () => async dispatch => {
  try {
    const data = await api.get('/theme');

    dispatch(setThemes(data));
  } catch (e) {
    //
  }
};

export const getThemes = loadingThunk(GET_THEMES_LOADING)(getThemesAction);

export const downloadThemesAction = ({ academicYear, academicDegree }) => async () => {
  try {
    const blob = await api.get(`/theme/download/${academicYear.value}/${academicDegree.value}`, null, {}, toBlob);
    download(`themes_${academicYear.label}_${academicDegree.label}.docx`, blob);
  } catch (e) {
    //
  }
};

export const downloadThemes = loadingThunk(DOWNLOAD_THEMES_LOADING)(downloadThemesAction);
