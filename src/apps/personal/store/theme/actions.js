import { createAction } from 'redux-actions';

export const SET_THEMES = 'theme/setAll';
export const SET_THEMES_FILTERS = 'theme/setFilters';

export const setThemes = createAction(SET_THEMES);
export const setThemesFilters = createAction(SET_THEMES_FILTERS);
