import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getSpecialities = state => state.specialty.specialities;

export const specialitiesSelector = createSelector(getSpecialities, idX);

export const specialitiesOptionsSelector = createSelector(
  getSpecialities,
  specialities => specialities.map(el => ({
    value: el.id,
    label: `${el.number} - ${el.name}`,
  })).sort(sortFunction),
);
