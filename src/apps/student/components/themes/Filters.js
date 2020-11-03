import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { useStudentSelector, useStudentDispatch } from '../../store/context';
import { studentsOptionsSelector } from '../../../personal/store/student/selectors';
import { teachersOptionsSelector } from '../../../personal/store/teacher/selectors';
import { themesFiltersSelector } from '../../store/theme/selectors';
import { setThemesFilters } from '../../store/theme/actions';

const Filters = () => {
  const dispatch = useStudentDispatch();
  const studentsOptions = useStudentSelector(studentsOptionsSelector);
  const teachersOptions = useStudentSelector(teachersOptionsSelector);
  const themesFilters = useStudentSelector(themesFiltersSelector);

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
