import { createSelector } from 'reselect';
import { idX } from '../../../../redux/helpers';

const getMyThemes = state => state.myThemes.themes;
const getMyLoad = state => state.myThemes.load;

export const myThemesSelector = createSelector(
  getMyThemes,
  myThemes => myThemes && myThemes.map(el => ({
    ...el,
    requests: el.requests && el.requests.filter(req => req.status === 'PENDING'),
  })),
);

export const myLoadSelector = createSelector(getMyLoad, idX);
