import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getAcademicDegrees = state => state.academicDegree.academicDegrees;

export const academicDegreesSelector = createSelector(getAcademicDegrees, idX);

export const academicDegreesOptionsSelector = createSelector(
  getAcademicDegrees,
  academicDegrees => academicDegrees.map(el => ({
    value: el.id,
    label: el.name,
  })),
);
