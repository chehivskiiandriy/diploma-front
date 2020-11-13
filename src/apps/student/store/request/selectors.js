import { createSelector } from 'reselect';

const getInfoByStatus = status => {
  switch (status) {
    case 'PENDING': return 'В очікуванні';
    case 'REJECTED': return 'Відхилено';
    case 'CONFIRMED': return 'Підтверджено';
    default: return 'Не визначено';
  }
};

const getRequests = state => state.request.requests;

export const requestsSelector = createSelector(
  getRequests,
  requests => requests.map(el => ({
    ...el,
    statusInfo: getInfoByStatus(el.status),
  })),
);
