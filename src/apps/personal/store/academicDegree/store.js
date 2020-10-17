import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  academicDegrees: [],
};

export default handleActions(
  {
    [AC.SET_ACADEMIC_DEGREES]: (store, { payload }) => ({
      ...store,
      academicDegrees: payload,
    }),
    [AC.ADD_ACADEMIC_DEGREE]: (store, { payload }) => ({
      ...store,
      academicDegrees: [payload, ...store.academicDegrees],
    }),
    [AC.UPDATE_ACADEMIC_DEGREE]: (store, { payload }) => ({
      ...store,
      academicDegrees: store.academicDegrees.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_ACADEMIC_DEGREE]: (store, { payload }) => ({
      ...store,
      academicDegrees: store.academicDegrees.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
