import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  schedules: [],
  filters: {
    academicYear: null,
    academicDegree: null,
  },
};

export default handleActions(
  {
    [AC.SET_SCHEDULES]: (store, { payload }) => ({
      ...store,
      schedules: payload,
    }),
    [AC.SET_SCHEDULE_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
