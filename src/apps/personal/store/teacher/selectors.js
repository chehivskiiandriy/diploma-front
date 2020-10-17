import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getTeachers = state => state.teacher.teachers;

export const teachersSelector = createSelector(getTeachers, idX);

export const teachersOptionsSelector = createSelector(
  getTeachers,
  teachers => teachers.map(el => ({
    value: el.id,
    label: `${el.lastName} ${el.firstName} ${el.middleName}`,
  })),
);
