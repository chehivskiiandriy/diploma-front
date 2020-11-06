import { createAction } from 'redux-actions';

export const SET_TEACHERS_LOAD = 'teacherLoad/setAll';
export const SET_TEACHERS_LOAD_FILTERS = 'teacherLoad/setFilters';

export const setTeachersLoad = createAction(SET_TEACHERS_LOAD);
export const setTeachersLoadFilters = createAction(SET_TEACHERS_LOAD_FILTERS);
