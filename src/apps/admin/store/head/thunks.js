import { adminApi } from '../../../../api';
import {
  setHeads,
  addHead,
  updateHead,
  removeHead,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_HEADS_LOADING,
  CREATE_HEAD_LOADING,
  UPDATE_HEAD_LOADING,
  DELETE_HEAD_LOADING,
} from '../../../../store/loading/constants';

export const getHeadsAction = () => async dispatch => {
  try {
    const data = await adminApi.get('/admin/heads');

    dispatch(setHeads(data));
  } catch (e) {
    //
  }
};

export const getHeads = loadingThunk(GET_HEADS_LOADING)(getHeadsAction);

export const createHeadAction = params => async dispatch => {
  try {
    const data = await adminApi.post('/admin/head', params);

    dispatch(addHead(data));
  } catch (e) {
    //
  }
};

export const createHead = loadingThunk(CREATE_HEAD_LOADING)(createHeadAction);

export const editHeadAction = (id, params) => async dispatch => {
  try {
    const data = await adminApi.put(`/admin/head/${id}`, params);

    dispatch(updateHead(data));
  } catch (e) {
    //
  }
};

export const editHead = loadingThunk(UPDATE_HEAD_LOADING)(editHeadAction);

export const deleteHeadAction = id => async dispatch => {
  try {
    await adminApi.delete(`/admin/head/${id}`);

    dispatch(removeHead(id));
  } catch (e) {
    //
  }
};

export const deleteHead = loadingThunk(DELETE_HEAD_LOADING)(deleteHeadAction);
