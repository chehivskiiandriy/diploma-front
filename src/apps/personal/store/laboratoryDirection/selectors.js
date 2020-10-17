import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getLaboratoriesDirections = state => state.laboratoryDirection.laboratoriesDirections;

export const laboratoriesDirectionsSelector = createSelector(getLaboratoriesDirections, idX);

export const laboratoriesDirectionsOptionsSelector = createSelector(
  getLaboratoriesDirections,
  laboratoriesDirections => laboratoriesDirections.map(el => ({
    value: el.id,
    label: el.name,
  })),
);
