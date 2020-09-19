import { createSelector } from 'reselect';

import { idX } from '../../redux/helpers';

const getUserId = state => state.user.id;
const getUserEmail = state => state.user.email;
const getUserLoaded = state => state.user.isLoaded;
const getUserRole = state => state.user.role;

export const userIdSelector = createSelector(getUserId, idX);
export const userEmailSelector = createSelector(getUserEmail, idX);
export const isUserLoadedSelector = createSelector(getUserLoaded, idX);
export const userRoleSelector = createSelector(getUserRole, idX);
