import { createAction } from 'redux-actions';

export const SET_TEACHERS = 'teacher/setAll';
export const ADD_TEACHER = 'teacher/add';
export const UPDATE_TEACHER = 'teacher/update';
export const REMOVE_TEACHER = 'teacher/remove';
export const SET_TEACHER_FILTERS = 'teacher/setFilters';

export const setTeachers = createAction(SET_TEACHERS);
export const addTeacher = createAction(ADD_TEACHER);
export const updateTeacher = createAction(UPDATE_TEACHER);
export const removeTeacher = createAction(REMOVE_TEACHER);
export const setTeacherFilters = createAction(SET_TEACHER_FILTERS);
