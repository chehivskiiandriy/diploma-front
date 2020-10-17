import api from '../../../../api';
import {
  setLaboratoriesDirections,
  addLaboratoryDirection,
  updateLaboratoryDirection,
  removeLaboratoryDirection,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_LABORATORIES_DIRECTIONS_LOADING,
  CREATE_LABORATORY_DIRECTION_LOADING,
  UPDATE_LABORATORY_DIRECTION_LOADING,
  DELETE_LABORATORY_DIRECTION_LOADING,
} from '../../../../store/loading/constants';

export const getLaboratoriesDirectionsAction = () => async dispatch => {
  try {
    const data = await api.get('/laboratory-direction');

    dispatch(setLaboratoriesDirections(data));
  } catch (e) {
    //
  }
};

export const getLaboratoriesDirections = (
  loadingThunk(GET_LABORATORIES_DIRECTIONS_LOADING)(getLaboratoriesDirectionsAction)
);

export const createLaboratoryDirectionAction = params => async dispatch => {
  try {
    const data = await api.post('/laboratory-direction', params);

    dispatch(addLaboratoryDirection(data));
  } catch (e) {
    //
  }
};

export const createLaboratoryDirection = (
  loadingThunk(CREATE_LABORATORY_DIRECTION_LOADING)(createLaboratoryDirectionAction)
);

export const editLaboratoryDirectionAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/laboratory-direction/${id}`, params);

    dispatch(updateLaboratoryDirection(data));
  } catch (e) {
    //
  }
};

export const editLaboratoryDirection = (
  loadingThunk(UPDATE_LABORATORY_DIRECTION_LOADING)(editLaboratoryDirectionAction)
);

export const deleteLaboratoryDirectionAction = id => async dispatch => {
  try {
    await api.delete(`/laboratory-direction/${id}`);

    dispatch(removeLaboratoryDirection(id));
  } catch (e) {
    //
  }
};

export const deleteLaboratoryDirection = (
  loadingThunk(DELETE_LABORATORY_DIRECTION_LOADING)(deleteLaboratoryDirectionAction)
);
