import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getAcademicDegrees = state => state.academicDegree.academicDegrees;

export const academicDegreesSelector = createSelector(getAcademicDegrees, idX);

export const academicDegreesOptionsSelector = createSelector(
  getAcademicDegrees,
  academicDegrees => academicDegrees.map(el => ({
    value: el.id,
    label: el.name,
  })).sort(sortFunction),
);
