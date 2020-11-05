import api from '../../../../api';
import {
  setSpecialty,
  addSpecialty,
  updateSpecialty,
  removeSpecialty,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_SPECIALITIES_LOADING,
  CREATE_SPECIALTY_LOADING,
  UPDATE_SPECIALTY_LOADING,
  DELETE_SPECIALTY_LOADING,
} from '../../../../store/loading/constants';

export const getSpecialtyAction = () => async dispatch => {
  try {
    const data = await api.get('/specialty');

    dispatch(setSpecialty(data));
  } catch (e) {
    //
  }
};

export const getSpecialities = (
  loadingThunk(GET_SPECIALITIES_LOADING)(getSpecialtyAction)
);

export const createSpecialtyAction = params => async dispatch => {
  try {
    const data = await api.post('/specialty', params);

    dispatch(addSpecialty(data));
  } catch (e) {
    //
  }
};

export const createSpecialty = (
  loadingThunk(CREATE_SPECIALTY_LOADING)(createSpecialtyAction)
);

export const editSpecialtyAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/specialty/${id}`, params);

    dispatch(updateSpecialty(data));
  } catch (e) {
    //
  }
};

export const editSpecialty = (
  loadingThunk(UPDATE_SPECIALTY_LOADING)(editSpecialtyAction)
);

export const deleteSpecialtyAction = id => async dispatch => {
  try {
    await api.delete(`/specialty/${id}`);

    dispatch(removeSpecialty(id));
  } catch (e) {
    //
  }
};

export const deleteSpecialty = (
  loadingThunk(DELETE_SPECIALTY_LOADING)(deleteSpecialtyAction)
);
