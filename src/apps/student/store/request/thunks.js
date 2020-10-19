import api from '../../../../api';
import {
  setRequests,
  addRequest,
  removeRequest,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_REQUESTS_LOADING,
  CREATE_REQUEST_LOADING,
  DELETE_REQUEST_LOADING,
} from '../../../../store/loading/constants';

export const getRequestsAction = () => async dispatch => {
  try {
    const data = await api.get('/request');

    dispatch(setRequests(data));
  } catch (e) {
    //
  }
};

export const getRequests = loadingThunk(GET_REQUESTS_LOADING)(getRequestsAction);

export const createRequestAction = themeId => async dispatch => {
  try {
    const data = await api.post('/request', { themeId });

    dispatch(addRequest(data));
  } catch (e) {
    //
  }
};

export const createRequest = loadingThunk(CREATE_REQUEST_LOADING)(createRequestAction);

export const deleteRequestAction = id => async dispatch => {
  try {
    await api.delete(`/request/${id}`);

    dispatch(removeRequest(id));
  } catch (e) {
    //
  }
};

export const deleteRequest = loadingThunk(DELETE_REQUEST_LOADING)(deleteRequestAction);
