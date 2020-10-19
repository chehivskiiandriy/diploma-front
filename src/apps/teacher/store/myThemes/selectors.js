import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getMyThemes = state => state.myThemes.themes;

export const myThemesSelector = createSelector(getMyThemes, idX);
