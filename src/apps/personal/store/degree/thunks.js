import api from '../../../../api';
import {
  setDegrees,
  addDegree,
  updateDegree,
  removeDegree,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_DEGREES_LOADING,
  CREATE_DEGREE_LOADING,
  UPDATE_DEGREE_LOADING,
  DELETE_DEGREE_LOADING,
} from '../../../../store/loading/constants';

export const getDegreesAction = () => async dispatch => {
  try {
    const data = await api.get('/degree');

    dispatch(setDegrees(data));
  } catch (e) {
    //
  }
};

export const getDegrees = loadingThunk(GET_DEGREES_LOADING)(getDegreesAction);

export const createDegreeAction = params => async dispatch => {
  try {
    const data = await api.post('/degree', params);

    dispatch(addDegree(data));
  } catch (e) {
    //
  }
};

export const createDegree = loadingThunk(CREATE_DEGREE_LOADING)(createDegreeAction);

export const editDegreeAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/degree/${id}`, params);

    dispatch(updateDegree(data));
  } catch (e) {
    //
  }
};

export const editDegree = loadingThunk(UPDATE_DEGREE_LOADING)(editDegreeAction);

export const deleteDegreeAction = id => async dispatch => {
  try {
    await api.delete(`/degree/${id}`);

    dispatch(removeDegree(id));
  } catch (e) {
    //
  }
};

export const deleteDegree = loadingThunk(DELETE_DEGREE_LOADING)(deleteDegreeAction);
