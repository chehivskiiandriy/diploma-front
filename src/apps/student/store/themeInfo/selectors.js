import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getThemeInfo = state => state.themeInfo.theme;

export const themeInfoSelector = createSelector(getThemeInfo, idX);
export const themeInfoExistSelector = createSelector(
  getThemeInfo,
  theme => theme && theme.id,
);
