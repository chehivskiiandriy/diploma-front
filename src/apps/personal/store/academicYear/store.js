import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  academicYears: [],
};

export default handleActions(
  {
    [AC.SET_ACADEMIC_YEARS]: (store, { payload }) => ({
      ...store,
      academicYears: payload,
    }),
    [AC.ADD_ACADEMIC_YEAR]: (store, { payload }) => ({
      ...store,
      academicYears: [payload, ...store.academicYears],
    }),
    [AC.UPDATE_ACADEMIC_YEAR]: (store, { payload }) => ({
      ...store,
      academicYears: store.academicYears.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_ACADEMIC_YEAR]: (store, { payload }) => ({
      ...store,
      academicYears: store.academicYears.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
