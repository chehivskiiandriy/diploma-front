import { createAction } from 'redux-actions';

export const SET_SCHEDULES = 'schedule/setAll';
export const ADD_SCHEDULE = 'schedule/add';
export const UPDATE_SCHEDULE = 'schedule/update';
export const REMOVE_SCHEDULE = 'schedule/remove';
export const SET_SCHEDULE_FILTERS = 'schedule/setFilters';

export const setSchedules = createAction(SET_SCHEDULES);
export const addSchedule = createAction(ADD_SCHEDULE);
export const updateSchedule = createAction(UPDATE_SCHEDULE);
export const removeSchedule = createAction(REMOVE_SCHEDULE);
export const setScheduleFilters = createAction(SET_SCHEDULE_FILTERS);
