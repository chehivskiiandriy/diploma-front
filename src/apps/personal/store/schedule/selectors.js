import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getSchedules = state => state.schedule.schedules;
const getScheduleFilters = state => state.schedule.filters;

export const schedulesSelector = createSelector(getSchedules, idX);
export const scheduleFiltersSelector = createSelector(getScheduleFilters, idX);

export const filteredSchedulesSelector = createSelector(
  [getSchedules, getScheduleFilters],
  (schedules, scheduleFilters) => {
    const academicDegree = scheduleFilters.academicDegree && scheduleFilters.academicDegree.value;
    const academicYear = scheduleFilters.academicYear && scheduleFilters.academicYear.value;
    const { name } = scheduleFilters;
    return schedules.filter(el => (
      (!academicDegree || el.academicDegreeId === academicDegree)
      && (!academicYear || el.academicYearId === academicYear)
      && (!name || el.name.toLowerCase().includes(name.toLowerCase()))
    ));
  },
);
