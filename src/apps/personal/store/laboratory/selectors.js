import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getLaboratories = state => state.laboratory.laboratories;

export const laboratoriesSelector = createSelector(getLaboratories, idX);

export const laboratoriesOptionsSelector = createSelector(
  getLaboratories,
  laboratories => laboratories.map(el => ({
    value: el.id,
    label: el.name,
  })),
);
