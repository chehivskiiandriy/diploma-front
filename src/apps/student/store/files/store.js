import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  files: [],
  myFiles: [],
};

export default handleActions(
  {
    [AC.SET_FILES]: (store, { payload }) => ({
      ...store,
      files: payload,
    }),
    [AC.SET_MY_FILES]: (store, { payload }) => ({
      ...store,
      myFiles: payload,
    }),
    [AC.ADD_FILE]: (store, { payload }) => ({
      ...store,
      files: [payload, ...store.requests],
    }),
    [AC.REMOVE_FILE]: (store, { payload }) => ({
      ...store,
      myFiles: store.myFiles.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
