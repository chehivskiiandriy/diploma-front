import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { specialitiesOptionsSelector } from '../../store/specialty/selectors';
import { groupFiltersSelector } from '../../store/group/selectors';
import { setGroupFilters } from '../../store/group/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
  const specialitiesOptions = usePersonalSelector(specialitiesOptionsSelector);
  const groupFilters = usePersonalSelector(groupFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setGroupFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setGroupFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
        <div className="filter-select-container">
          <ReactSelect
            isClearable
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
            menuShouldScrollIntoView
            isSearchable
            placeholder="Академічний рівень"
            value={groupFilters.academicDegree}
            onChange={handleChange('academicDegree')}
            options={academicDegreesOptions}
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Спеціальність"
            value={groupFilters.specialty}
            onChange={handleChange('specialty')}
            options={specialitiesOptions}
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
