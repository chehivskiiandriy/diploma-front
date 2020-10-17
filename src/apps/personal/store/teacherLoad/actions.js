import { createAction } from 'redux-actions';

export const SET_TEACHERS_LOAD = 'teacherLoad/setAll';
export const ADD_TEACHER_LOAD = 'teacherLoad/add';
export const UPDATE_TEACHER_LOAD = 'teacherLoad/update';
export const REMOVE_TEACHER_LOAD = 'teacherLoad/remove';

export const setTeachersLoad = createAction(SET_TEACHERS_LOAD);
export const addTeacherLoad = createAction(ADD_TEACHER_LOAD);
export const updateTeacherLoad = createAction(UPDATE_TEACHER_LOAD);
export const removeTeacherLoad = createAction(REMOVE_TEACHER_LOAD);
