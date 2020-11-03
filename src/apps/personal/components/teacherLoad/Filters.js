import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { teachersOptionsSelector } from '../../store/teacher/selectors';
import { teacherLoadFiltersSelector } from '../../store/teacherLoad/selectors';
import { setTeachersLoadFilters } from '../../store/teacherLoad/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
  const teachersOptions = usePersonalSelector(teachersOptionsSelector);
  const teacherLoadFilters = usePersonalSelector(teacherLoadFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setTeachersLoadFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setTeachersLoadFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Викладач"
            value={teacherLoadFilters.teacher}
            onChange={handleChange('teacher')}
            options={teachersOptions}
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Академічний рік"
            value={teacherLoadFilters.academicYear}
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
            value={teacherLoadFilters.academicDegree}
            onChange={handleChange('academicDegree')}
            options={academicDegreesOptions}
          />
        </div>
      </div>
      <div className="filters-row">
        <Input
          id="amount"
          name="amount"
          value={teacherLoadFilters.name}
          onChange={handleInputChange}
          placeholder="Кількість студентів..."
        />
      </div>
    </div>
  );
};

export default Filters;
