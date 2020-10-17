import api from '../../../../api';
import {
  setLaboratories,
  addLaboratory,
  updateLaboratory,
  removeLaboratory,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_LABORATORIES_LOADING,
  CREATE_LABORATORY_LOADING,
  UPDATE_LABORATORY_LOADING,
  DELETE_LABORATORY_LOADING,
} from '../../../../store/loading/constants';

export const getLaboratoriesAction = () => async dispatch => {
  try {
    const data = await api.get('/laboratory');

    dispatch(setLaboratories(data));
  } catch (e) {
    //
  }
};

export const getLaboratories = loadingThunk(GET_LABORATORIES_LOADING)(getLaboratoriesAction);

export const createLaboratoryAction = params => async dispatch => {
  try {
    const data = await api.post('/laboratory', params);

    dispatch(addLaboratory(data));
  } catch (e) {
    //
  }
};

export const createLaboratory = loadingThunk(CREATE_LABORATORY_LOADING)(createLaboratoryAction);

export const editLaboratoryAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/laboratory/${id}`, params);

    dispatch(updateLaboratory(data));
  } catch (e) {
    //
  }
};

export const editLaboratory = loadingThunk(UPDATE_LABORATORY_LOADING)(editLaboratoryAction);

export const deleteLaboratoryAction = id => async dispatch => {
  try {
    await api.delete(`/laboratory/${id}`);

    dispatch(removeLaboratory(id));
  } catch (e) {
    //
  }
};

export const deleteLaboratory = loadingThunk(DELETE_LABORATORY_LOADING)(deleteLaboratoryAction);
