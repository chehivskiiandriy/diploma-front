import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getStudents = state => state.student.students;

export const studentsSelector = createSelector(getStudents, idX);
