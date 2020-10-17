import { adminApi } from '../../../../api';
import {
  setDepartments,
  addDepartment,
  updateDepartments,
  removeDepartment,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  CREATE_DEPARTMENT_LOADING,
  DELETE_DEPARTMENT_LOADING,
  GET_DEPARTMENTS_LOADING,
  UPDATE_DEPARTMENT_LOADING,
} from '../../../../store/loading/constants';

export const getDepartmentsAction = () => async dispatch => {
  try {
    const data = await adminApi.get('/department');

    dispatch(setDepartments(data));
  } catch (e) {
    //
  }
};

export const getDepartments = loadingThunk(GET_DEPARTMENTS_LOADING)(getDepartmentsAction);

export const createDepartmentAction = params => async dispatch => {
  try {
    const data = await adminApi.post('/department', params);

    dispatch(addDepartment(data));
  } catch (e) {
    //
  }
};

export const createDepartment = loadingThunk(CREATE_DEPARTMENT_LOADING)(createDepartmentAction);

export const editDepartmentAction = (id, params) => async dispatch => {
  try {
    const data = await adminApi.put(`/department/${id}`, params);

    dispatch(updateDepartments(data));
  } catch (e) {
    //
  }
};

export const editDepartment = loadingThunk(UPDATE_DEPARTMENT_LOADING)(editDepartmentAction);

export const deleteDepartmentAction = id => async dispatch => {
  try {
    await adminApi.delete(`/department/${id}`);

    dispatch(removeDepartment(id));
  } catch (e) {
    //
  }
};

export const deleteDepartment = loadingThunk(DELETE_DEPARTMENT_LOADING)(deleteDepartmentAction);
