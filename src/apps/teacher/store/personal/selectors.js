import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getPersonals = state => state.personal.personals;

export const personalsSelector = createSelector(getPersonals, idX);
