import { createAction } from 'redux-actions';

export const SET_DEPARTMENTS = 'department/setAll';
export const ADD_DEPARTMENT = 'department/add';
export const UPDATE_DEPARTMENT = 'department/update';
export const REMOVE_DEPARTMENT = 'department/remove';

export const setDepartments = createAction(SET_DEPARTMENTS);
export const addDepartment = createAction(ADD_DEPARTMENT);
export const updateDepartments = createAction(UPDATE_DEPARTMENT);
export const removeDepartment = createAction(REMOVE_DEPARTMENT);
