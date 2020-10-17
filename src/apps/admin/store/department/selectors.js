import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getDepartments = state => state.department.departments;

export const departmentsSelector = createSelector(getDepartments, idX);

export const departmentsOptionsSelector = createSelector(
  getDepartments,
  departments => departments.map(el => ({
    value: el.id,
    label: el.name,
  })),
);
