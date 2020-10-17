import { createAction } from 'redux-actions';

export const SET_GROUPS = 'group/setAll';
export const ADD_GROUP = 'group/add';
export const UPDATE_GROUP = 'group/update';
export const REMOVE_GROUP = 'group/remove';

export const setGroups = createAction(SET_GROUPS);
export const addGroup = createAction(ADD_GROUP);
export const updateGroup = createAction(UPDATE_GROUP);
export const removeGroup = createAction(REMOVE_GROUP);
