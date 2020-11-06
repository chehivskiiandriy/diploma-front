import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getDegrees = state => state.degree.degrees;

export const degreesSelector = createSelector(getDegrees, idX);

export const degreesOptionsSelector = createSelector(
  getDegrees,
  degrees => degrees.map(el => ({
    value: el.id,
    label: el.name,
  })).sort(sortFunction),
);
