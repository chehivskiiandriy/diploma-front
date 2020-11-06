import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  groups: [],
  filters: {
    academicYear: null,
    academicDegree: null,
    specialty: null,
    name: '',
  },
};

export default handleActions(
  {
    [AC.SET_GROUPS]: (store, { payload }) => ({
      ...store,
      groups: payload,
    }),
    [AC.ADD_GROUP]: (store, { payload }) => ({
      ...store,
      groups: [payload, ...store.groups],
    }),
    [AC.UPDATE_GROUP]: (store, { payload }) => ({
      ...store,
      groups: store.groups.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_GROUP]: (store, { payload }) => ({
      ...store,
      groups: store.groups.filter(el => (el.id !== payload)),
    }),
    [AC.SET_GROUP_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
