import { createSelector } from 'reselect';

const getMyThemes = state => state.myThemes.themes;

export const myThemesSelector = createSelector(
  getMyThemes,
  myThemes => myThemes && myThemes.map(el => ({
    ...el,
    requests: el.requests && el.requests.filter(req => req.status === 'PENDING'),
  })),
);
