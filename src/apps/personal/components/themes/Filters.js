import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { usePersonalSelector, usePersonalDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { studentsOptionsSelector } from '../../store/student/selectors';
import { teachersOptionsSelector } from '../../store/teacher/selectors';
import { themesFiltersSelector } from '../../store/theme/selectors';
import { setThemesFilters } from '../../store/theme/actions';

const Filters = () => {
  const dispatch = usePersonalDispatch();
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
  const studentsOptions = usePersonalSelector(studentsOptionsSelector);
  const teachersOptions = usePersonalSelector(teachersOptionsSelector);
  const themesFilters = usePersonalSelector(themesFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setThemesFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setThemesFilters({ [name]: value }));
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
            value={themesFilters.teacher}
            onChange={handleChange('teacher')}
            options={teachersOptions}
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Студент"
            value={themesFilters.student}
            onChange={handleChange('student')}
            options={studentsOptions}
          />
        </div>
        <div className="filter-select-container">
          <ReactSelect
            isClearable
            menuShouldScrollIntoView
            isSearchable
            placeholder="Академічний рік"
            value={themesFilters.academicYear}
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
            value={themesFilters.academicDegree}
            onChange={handleChange('academicDegree')}
            options={academicDegreesOptions}
          />
        </div>
      </div>
      <div className="filters-row">
        <Input
          id="name"
          name="name"
          value={themesFilters.name}
          onChange={handleInputChange}
          placeholder="Пошук за назвою..."
        />
      </div>
    </div>
  );
};

export default Filters;
