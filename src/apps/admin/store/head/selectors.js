import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getHeads = state => state.head.heads;

export const headsSelector = createSelector(getHeads, idX);
