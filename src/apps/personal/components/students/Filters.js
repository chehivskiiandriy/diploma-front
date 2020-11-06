import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { groupsOptionsSelector } from '../../store/group/selectors';
import { studentsFiltersSelector } from '../../store/student/selectors';
import { setStudentFilters } from '../../store/student/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const groupsOptions = usePersonalSelector(groupsOptionsSelector);
  const studentsFilters = usePersonalSelector(studentsFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setStudentFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setStudentFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
        <div className="filter-select-container">
          <Input
            id="searchValue"
            name="searchValue"
            value={studentsFilters.searchValue}
            onChange={handleInputChange}
            placeholder="Пошук за піб, email..."
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Група"
            value={studentsFilters.group}
            onChange={handleChange('group')}
            options={groupsOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
