import api from '../../../../api';
import {
  setPersonals,
  addPersonal,
  updatePersonal,
  removePersonal,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_PERSONALS_LOADING,
  CREATE_PERSONAL_LOADING,
  UPDATE_PERSONAL_LOADING,
  DELETE_PERSONAL_LOADING,
} from '../../../../store/loading/constants';

export const getPersonalsAction = () => async dispatch => {
  try {
    const data = await api.get('/users/personals');

    dispatch(setPersonals(data));
  } catch (e) {
    //
  }
};

export const getPersonals = loadingThunk(GET_PERSONALS_LOADING)(getPersonalsAction);

export const createPersonalAction = params => async dispatch => {
  try {
    const data = await api.post('/users/personal', params);

    dispatch(addPersonal(data));
  } catch (e) {
    //
  }
};

export const createPersonal = loadingThunk(CREATE_PERSONAL_LOADING)(createPersonalAction);

export const editPersonalAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/users/personal/${id}`, params);

    dispatch(updatePersonal(data));
  } catch (e) {
    //
  }
};

export const editPersonal = loadingThunk(UPDATE_PERSONAL_LOADING)(editPersonalAction);

export const deletePersonalAction = id => async dispatch => {
  try {
    await api.delete(`/users/personal/${id}`);

    dispatch(removePersonal(id));
  } catch (e) {
    //
  }
};

export const deletePersonal = loadingThunk(DELETE_PERSONAL_LOADING)(deletePersonalAction);
