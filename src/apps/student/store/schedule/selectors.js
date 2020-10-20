import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getSchedules = state => state.schedule.schedules;

export const schedulesSelector = createSelector(getSchedules, idX);
