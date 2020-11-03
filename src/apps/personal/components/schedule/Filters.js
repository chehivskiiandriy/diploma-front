import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { scheduleFiltersSelector } from '../../store/schedule/selectors';
import { setScheduleFilters } from '../../store/schedule/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
  const groupFilters = usePersonalSelector(scheduleFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setScheduleFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setScheduleFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldBlockScroll
            menuShouldScrollIntoView
            isSearchable
            placeholder="Академічний рік"
            value={groupFilters.academicYear}
            onChange={handleChange('academicYear')}
            options={academicYearsOptions}
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldBlockScroll
            menuShouldScrollIntoView
            isSearchable
            placeholder="Академічний рівень"
            value={groupFilters.academicDegree}
            onChange={handleChange('academicDegree')}
            options={academicDegreesOptions}
          />
        </div>
      </div>
      <div className="filters-row">
        <Input
          id="name"
          name="name"
          value={groupFilters.name}
          onChange={handleInputChange}
          placeholder="Пошук за назвою..."
        />
      </div>
    </div>
  );
};

export default Filters;
