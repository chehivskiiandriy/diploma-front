import api from '../../../../api';
import {
  setStudents,
  addStudent,
  updateStudent,
  removeStudent,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_STUDENTS_LOADING,
  CREATE_STUDENT_LOADING,
  UPDATE_STUDENT_LOADING,
  DELETE_STUDENT_LOADING,
  UPLOAD_STUDENTS_LOADING,
} from '../../../../store/loading/constants';
import { pureModifier } from '../../../../api/helpers';

export const getStudentsAction = () => async dispatch => {
  try {
    const data = await api.get('/users/students');

    dispatch(setStudents(data));
  } catch (e) {
    //
  }
};

export const getStudents = loadingThunk(GET_STUDENTS_LOADING)(getStudentsAction);

export const createStudentAction = params => async dispatch => {
  try {
    const data = await api.post('/users/student', params);

    dispatch(addStudent(data));
  } catch (e) {
    //
  }
};

export const createStudent = loadingThunk(CREATE_STUDENT_LOADING)(createStudentAction);

export const editStudentAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/users/student/${id}`, params);

    dispatch(updateStudent(data));
  } catch (e) {
    //
  }
};

export const editStudent = loadingThunk(UPDATE_STUDENT_LOADING)(editStudentAction);

export const deleteStudentAction = id => async dispatch => {
  try {
    await api.delete(`/users/student/${id}`);

    dispatch(removeStudent(id));
  } catch (e) {
    //
  }
};

export const deleteStudent = loadingThunk(DELETE_STUDENT_LOADING)(deleteStudentAction);

export const uploadStudentsAction = data => async dispatch => {
  try {
    await api.post('/users/upload/students', data, {
      withCommonHeaders: false,
      dataModifier: pureModifier,
    });
    dispatch(getStudents());
  } catch (e) {
    //
  }
};

export const uploadStudents = loadingThunk(UPLOAD_STUDENTS_LOADING)(uploadStudentsAction);
