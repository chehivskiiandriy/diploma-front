import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { degreesOptionsSelector } from '../../store/degree/selectors';
import { teachersFiltersSelector } from '../../store/teacher/selectors';
import { setTeacherFilters } from '../../store/teacher/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const degreesOptions = usePersonalSelector(degreesOptionsSelector);
  const teachersFilters = usePersonalSelector(teachersFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setTeacherFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setTeacherFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
        <div className="filter-select-container">
          <Input
            id="searchValue"
            name="searchValue"
            value={teachersFilters.searchValue}
            onChange={handleInputChange}
            placeholder="Пошук за піб, email..."
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Науковий ступінь"
            value={teachersFilters.degree}
            onChange={handleChange('degree')}
            options={degreesOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
