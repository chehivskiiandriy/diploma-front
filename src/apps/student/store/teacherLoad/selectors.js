import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getTeachersLoad = state => state.teacherLoad.teacherLoad;
const getTeachersLoadFilters = state => state.teacherLoad.filters;

export const teachersLoadSelector = createSelector(getTeachersLoad, idX);
export const teacherLoadFiltersSelector = createSelector(getTeachersLoadFilters, idX);

export const filteredTeacherLoadSelector = createSelector(
  [getTeachersLoad, getTeachersLoadFilters],
  (teacherLoad, teacherLoadFilters) => {
    const academicDegree = teacherLoadFilters.academicDegree
      && teacherLoadFilters.academicDegree.value;
    const academicYear = teacherLoadFilters.academicYear && teacherLoadFilters.academicYear.value;
    const teacher = teacherLoadFilters.teacher && teacherLoadFilters.teacher.value;
    const { amount } = teacherLoadFilters;

    return teacherLoad.filter(el => (
      (!academicDegree || el.academicDegreeId === academicDegree)
      && (!academicYear || el.academicYearId === academicYear)
      && (!teacher || el.userId === teacher)
      && (!amount || el.amount === +amount)
    ));
  },
);
