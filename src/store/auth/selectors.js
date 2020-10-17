import { createSelector } from 'reselect';

import { idX } from '../../redux/helpers';

const getAdminAuthorized = state => state.auth.isAuthorizedAdmin;

export const isAdminLoggedSelector = createSelector(getAdminAuthorized, idX);
