import { startLoading, endLoading } from './actions';

export const loadingThunk = taskId => thunk => (...args) => dispatch => {
  dispatch(startLoading(taskId));
  return dispatch(thunk(...args)).finally(() => {
    dispatch(endLoading(taskId));
  });
};
