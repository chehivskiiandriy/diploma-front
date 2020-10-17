import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  laboratoriesDirections: [],
};

export default handleActions(
  {
    [AC.SET_LABORATORIES_DIRECTIONS]: (store, { payload }) => ({
      ...store,
      laboratoriesDirections: payload,
    }),
    [AC.ADD_LABORATORY_DIRECTION]: (store, { payload }) => ({
      ...store,
      laboratoriesDirections: [payload, ...store.laboratoriesDirections],
    }),
    [AC.UPDATE_LABORATORY_DIRECTION]: (store, { payload }) => ({
      ...store,
      laboratoriesDirections: store.laboratoriesDirections.map(el => (
        el.id === payload.id ? payload : el
      )),
    }),
    [AC.REMOVE_LABORATORY_DIRECTION]: (store, { payload }) => ({
      ...store,
      laboratoriesDirections: store.laboratoriesDirections.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
