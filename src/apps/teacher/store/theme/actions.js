import { createAction } from 'redux-actions';

export const SET_THEMES = 'theme/setAll';
export const APPROVE_THEME = 'theme/approve';
export const DECLINE_THEME = 'theme/decline';

export const setThemes = createAction(SET_THEMES);
export const setThemeApprove = createAction(APPROVE_THEME);
export const setThemeDecline = createAction(DECLINE_THEME);
