import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getGroups = state => state.group.groups;

export const groupsSelector = createSelector(getGroups, idX);

export const groupsOptionsSelector = createSelector(
  getGroups,
  groups => groups.map(el => ({
    value: el.id,
    label: el.name,
  })),
);
