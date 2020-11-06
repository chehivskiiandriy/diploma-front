import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getTeachers = state => state.teacher.teachers;
const getTeachersFilters = state => state.teacher.filters;

export const teachersSelector = createSelector(getTeachers, idX);
export const teachersFiltersSelector = createSelector(getTeachersFilters, idX);

export const teachersOptionsSelector = createSelector(
  getTeachers,
  teachers => teachers.map(el => ({
    value: el.id,
    label: `${el.lastName} ${el.firstName} ${el.middleName}`,
  })).sort(sortFunction),
);

export const filteredTeachersSelector = createSelector(
  [getTeachers, getTeachersFilters],
  (teachers, teachersFilters) => {
    const degree = teachersFilters.degree && teachersFilters.degree.value;
    const { searchValue } = teachersFilters;

    return teachers.filter(el => (
      (!degree || el.degreeId === degree)
      && (!searchValue || `${el.lastName} ${el.firstName} ${el.middleName} ${el.email}`.toLowerCase().includes(searchValue.toLowerCase()))
    ));
  },
);
