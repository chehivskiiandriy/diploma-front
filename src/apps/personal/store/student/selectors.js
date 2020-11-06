import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getStudents = state => state.student.students;
const getStudentsFilters = state => state.student.filters;

export const studentsSelector = createSelector(getStudents, idX);
export const studentsFiltersSelector = createSelector(getStudentsFilters, idX);

export const studentsOptionsSelector = createSelector(
  getStudents,
  students => students.map(el => ({
    value: el.id,
    label: `${el.lastName} ${el.firstName} ${el.middleName}`,
  })).sort(sortFunction),
);

export const filteredTStudentsSelector = createSelector(
  [getStudents, getStudentsFilters],
  (students, studentsFilters) => {
    const group = studentsFilters.group && studentsFilters.group.value;
    const { searchValue } = studentsFilters;

    return students.filter(el => (
      (!group || el.groupId === group)
      && (!searchValue || `${el.lastName} ${el.firstName} ${el.middleName} ${el.email}`.toLowerCase().includes(searchValue.toLowerCase()))
    ));
  },
);
