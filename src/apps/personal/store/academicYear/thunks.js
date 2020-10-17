import api from '../../../../api';
import {
  setAcademicYears,
  addAcademicYear,
  updateAcademicYear,
  removeAcademicYear,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_ACADEMIC_YEARS_LOADING,
  CREATE_ACADEMIC_YEAR_LOADING,
  UPDATE_ACADEMIC_YEAR_LOADING,
  DELETE_ACADEMIC_YEAR_LOADING,
} from '../../../../store/loading/constants';

export const getAcademicYearsAction = () => async dispatch => {
  try {
    const data = await api.get('/academic-year');

    dispatch(setAcademicYears(data));
  } catch (e) {
    //
  }
};

export const getAcademicYears = (
  loadingThunk(GET_ACADEMIC_YEARS_LOADING)(getAcademicYearsAction)
);

export const createAcademicYearAction = params => async dispatch => {
  try {
    const data = await api.post('/academic-year', params);

    dispatch(addAcademicYear(data));
  } catch (e) {
    //
  }
};

export const createAcademicYear = (
  loadingThunk(CREATE_ACADEMIC_YEAR_LOADING)(createAcademicYearAction)
);

export const editAcademicYearAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/academic-year/${id}`, params);

    dispatch(updateAcademicYear(data));
  } catch (e) {
    //
  }
};

export const editAcademicYear = (
  loadingThunk(UPDATE_ACADEMIC_YEAR_LOADING)(editAcademicYearAction)
);

export const deleteAcademicYearAction = id => async dispatch => {
  try {
    await api.delete(`/academic-year/${id}`);

    dispatch(removeAcademicYear(id));
  } catch (e) {
    //
  }
};

export const deleteAcademicYear = (
  loadingThunk(DELETE_ACADEMIC_YEAR_LOADING)(deleteAcademicYearAction)
);
