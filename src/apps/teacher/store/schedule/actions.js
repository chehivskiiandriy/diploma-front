import { createAction } from 'redux-actions';

export const SET_SCHEDULES = 'schedule/setAll';
export const SET_SCHEDULE_FILTERS = 'schedule/setFilters';

export const setSchedules = createAction(SET_SCHEDULES);
export const setScheduleFilters = createAction(SET_SCHEDULE_FILTERS);
