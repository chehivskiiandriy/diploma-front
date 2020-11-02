import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getAcademicYears = state => state.academicYear.academicYears;

export const academicYearsSelector = createSelector(getAcademicYears, idX);

export const academicYearsOptionsSelector = createSelector(
  getAcademicYears,
  academicYears => academicYears.map(el => ({
    value: el.id,
    label: el.name,
  })).sort(sortFunction),
);
