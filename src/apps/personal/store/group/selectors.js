import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';
import sortSelectValues from '../../../../utils/sortSelectValues';

const sortFunction = sortSelectValues('label');

const getGroups = state => state.group.groups;
const getGroupFilters = state => state.group.filters;

export const groupsSelector = createSelector(getGroups, idX);
export const groupFiltersSelector = createSelector(getGroupFilters, idX);

export const filteredGroupsSelector = createSelector(
  [getGroups, getGroupFilters],
  (groups, groupFilters) => {
    const academicDegree = groupFilters.academicDegree && groupFilters.academicDegree.value;
    const academicYear = groupFilters.academicYear && groupFilters.academicYear.value;
    const { name } = groupFilters;
    return groups.filter(el => (
      (!academicDegree || el.academicDegreeId === academicDegree)
      && (!academicYear || el.academicYearId === academicYear)
      && (!name || el.name.toLowerCase().includes(name.toLowerCase()))
    ));
  },
);

export const groupsOptionsSelector = createSelector(
  getGroups,
  groups => groups.map(el => ({
    value: el.id,
    label: el.name,
  })).sort(sortFunction),
);
