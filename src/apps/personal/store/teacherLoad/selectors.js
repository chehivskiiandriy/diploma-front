import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getTeachersLoad = state => state.teacherLoad.teacherLoad;

export const teachersLoadSelector = createSelector(getTeachersLoad, idX);
