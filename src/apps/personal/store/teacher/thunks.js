import api from '../../../../api';
import {
  setTeachers,
  addTeacher,
  updateTeacher,
  removeTeacher,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_TEACHERS_LOADING,
  CREATE_TEACHER_LOADING,
  UPDATE_TEACHER_LOADING,
  DELETE_TEACHER_LOADING,
} from '../../../../store/loading/constants';

export const getTeachersAction = () => async dispatch => {
  try {
    const data = await api.get('/users/teachers');

    dispatch(setTeachers(data));
  } catch (e) {
    //
  }
};

export const getTeachers = loadingThunk(GET_TEACHERS_LOADING)(getTeachersAction);

export const createTeacherAction = params => async dispatch => {
  try {
    const data = await api.post('/users/teacher', params);

    dispatch(addTeacher(data));
  } catch (e) {
    //
  }
};

export const createTeacher = loadingThunk(CREATE_TEACHER_LOADING)(createTeacherAction);

export const editTeacherAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/users/teacher/${id}`, params);

    dispatch(updateTeacher(data));
  } catch (e) {
    //
  }
};

export const editTeacher = loadingThunk(UPDATE_TEACHER_LOADING)(editTeacherAction);

export const deleteTeacherAction = id => async dispatch => {
  try {
    await api.delete(`/users/teacher/${id}`);

    dispatch(removeTeacher(id));
  } catch (e) {
    //
  }
};

export const deleteTeacher = loadingThunk(DELETE_TEACHER_LOADING)(deleteTeacherAction);
