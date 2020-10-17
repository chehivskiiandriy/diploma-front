import { createSelector } from 'reselect';

export const loadingSelector = state => state.loading;

export const isLoading = createSelector(
  loadingSelector,
  tasks => Object.values(tasks).some(value => !value),
);

export const isTaskLoading = createSelector(
  [loadingSelector, (_, task) => task, (_, __, defaultValue = false) => defaultValue],
  (tasks, taskId, defaultValue) => (tasks[taskId] ? !!tasks[taskId] : defaultValue),
);
