import { createAction } from 'redux-actions';

export const SET_MY_THEMES = 'myThemes/setAll';
export const ADD_MY_THEME = 'myThemes/add';
export const UPDATE_MY_THEME = 'myThemes/update';
export const REMOVE_MY_THEME = 'myThemes/remove';
export const SET_MY_LOAD = 'myThemes/setLoad';
export const SET_MY_THEMES_FILTERS = 'myThemes/setFilters';

export const setMyThemes = createAction(SET_MY_THEMES);
export const setMyLoad = createAction(SET_MY_LOAD);
export const addMyTheme = createAction(ADD_MY_THEME);
export const updateMyTheme = createAction(UPDATE_MY_THEME);
export const removeMyTheme = createAction(REMOVE_MY_THEME);
export const setMyThemesFilters = createAction(SET_MY_THEMES_FILTERS);
