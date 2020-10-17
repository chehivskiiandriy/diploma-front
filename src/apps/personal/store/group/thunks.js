import api from '../../../../api';
import {
  setGroups,
  addGroup,
  updateGroup,
  removeGroup,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_GROUPS_LOADING,
  CREATE_GROUP_LOADING,
  UPDATE_GROUP_LOADING,
  DELETE_GROUP_LOADING,
} from '../../../../store/loading/constants';

export const getGroupsAction = () => async dispatch => {
  try {
    const data = await api.get('/group');

    dispatch(setGroups(data));
  } catch (e) {
    //
  }
};

export const getGroups = loadingThunk(GET_GROUPS_LOADING)(getGroupsAction);

export const createGroupAction = params => async dispatch => {
  try {
    const data = await api.post('/group', params);

    dispatch(addGroup(data));
  } catch (e) {
    //
  }
};

export const createGroup = loadingThunk(CREATE_GROUP_LOADING)(createGroupAction);

export const editGroupAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/group/${id}`, params);

    dispatch(updateGroup(data));
  } catch (e) {
    //
  }
};

export const editGroup = loadingThunk(UPDATE_GROUP_LOADING)(editGroupAction);

export const deleteGroupAction = id => async dispatch => {
  try {
    await api.delete(`/group/${id}`);

    dispatch(removeGroup(id));
  } catch (e) {
    //
  }
};

export const deleteGroup = loadingThunk(DELETE_GROUP_LOADING)(deleteGroupAction);
