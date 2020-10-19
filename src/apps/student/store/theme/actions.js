import { createAction } from 'redux-actions';

export const SET_THEMES = 'themes/setAll';
export const REMOVE_THEME = 'themes/remove';

export const setThemes = createAction(SET_THEMES);
export const removeTheme = createAction(REMOVE_THEME);
