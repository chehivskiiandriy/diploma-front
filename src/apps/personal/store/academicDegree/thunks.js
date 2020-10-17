import api from '../../../../api';
import {
  setAcademicDegrees,
  addAcademicDegree,
  updateAcademicDegree,
  removeAcademicDegree,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_ACADEMIC_DEGREES_LOADING,
  CREATE_ACADEMIC_DEGREE_LOADING,
  UPDATE_ACADEMIC_DEGREE_LOADING,
  DELETE_ACADEMIC_DEGREE_LOADING,
} from '../../../../store/loading/constants';

export const getAcademicDegreesAction = () => async dispatch => {
  try {
    const data = await api.get('/academic-degree');

    dispatch(setAcademicDegrees(data));
  } catch (e) {
    //
  }
};

export const getAcademicDegrees = (
  loadingThunk(GET_ACADEMIC_DEGREES_LOADING)(getAcademicDegreesAction)
);

export const createAcademicDegreeAction = params => async dispatch => {
  try {
    const data = await api.post('/academic-degree', params);

    dispatch(addAcademicDegree(data));
  } catch (e) {
    //
  }
};

export const createAcademicDegree = (
  loadingThunk(CREATE_ACADEMIC_DEGREE_LOADING)(createAcademicDegreeAction)
);

export const editAcademicDegreeAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/academic-degree/${id}`, params);

    dispatch(updateAcademicDegree(data));
  } catch (e) {
    //
  }
};

export const editAcademicDegree = (
  loadingThunk(UPDATE_ACADEMIC_DEGREE_LOADING)(editAcademicDegreeAction)
);

export const deleteAcademicDegreeAction = id => async dispatch => {
  try {
    await api.delete(`/academic-degree/${id}`);

    dispatch(removeAcademicDegree(id));
  } catch (e) {
    //
  }
};

export const deleteAcademicDegree = (
  loadingThunk(DELETE_ACADEMIC_DEGREE_LOADING)(deleteAcademicDegreeAction)
);
