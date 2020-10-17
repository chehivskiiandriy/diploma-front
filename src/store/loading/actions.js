import { createAction } from 'redux-actions';

export const LOADING_START = 'loading/start';
export const LOADING_END = 'loading/end';

export const startLoading = createAction(LOADING_START);
export const endLoading = createAction(LOADING_END);
