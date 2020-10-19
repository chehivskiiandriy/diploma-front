import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getRequests = state => state.request.requests;

export const requestsSelector = createSelector(getRequests, idX);
