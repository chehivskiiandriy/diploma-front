import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getThemes = state => state.theme.themes;
const getThemesFilters = state => state.theme.filters;

export const themesSelector = createSelector(getThemes, idX);
export const themesFiltersSelector = createSelector(getThemesFilters, idX);

export const filteredThemesSelector = createSelector(
  [getThemes, getThemesFilters],
  (themes, themesFilters) => {
    const academicDegree = themesFilters.academicDegree && themesFilters.academicDegree.value;
    const academicYear = themesFilters.academicYear && themesFilters.academicYear.value;
    const student = themesFilters.student && themesFilters.student.value;
    const teacher = themesFilters.teacher && themesFilters.teacher.value;
    const { name } = themesFilters;

    return themes.filter(el => (
      (!academicDegree || el.academicDegreeId === academicDegree)
      && (!academicYear || el.academicYearId === academicYear)
      && (!student || el.studentId === student)
      && (!teacher || el.teacherId === teacher)
      && (!name || el.name.toLowerCase().includes(name.toLowerCase()))
    ));
  },
);
