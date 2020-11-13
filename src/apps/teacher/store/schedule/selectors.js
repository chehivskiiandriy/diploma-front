import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getSchedules = state => state.schedule.schedules;
const getScheduleFilters = state => state.schedule.filters;

export const schedulesSelector = createSelector(getSchedules, idX);
export const scheduleFiltersSelector = createSelector(getScheduleFilters, idX);
