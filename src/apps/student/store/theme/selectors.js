import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getThemes = state => state.theme.themes;

export const themesSelector = createSelector(getThemes, idX);
