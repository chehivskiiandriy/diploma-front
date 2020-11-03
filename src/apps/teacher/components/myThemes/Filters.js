import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { useTeacherSelector, useTeacherDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../../personal/store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../../personal/store/academicDegree/selectors';
import { studentsOptionsSelector } from '../../../personal/store/student/selectors';
import { teachersOptionsSelector } from '../../../personal/store/teacher/selectors';
import { myThemesFiltersSelector } from '../../store/myThemes/selectors';
import { setMyThemesFilters } from '../../store/myThemes/actions';

const Filters = () => {
  const dispatch = useTeacherDispatch();
  const academicYearsOptions = useTeacherSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = useTeacherSelector(academicDegreesOptionsSelector);
  const studentsOptions = useTeacherSelector(studentsOptionsSelector);
  const teachersOptions = useTeacherSelector(teachersOptionsSelector);
  const themesFilters = useTeacherSelector(myThemesFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setMyThemesFilters({ [type]: selectedOption }));
  };

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(setMyThemesFilters({ [name]: value }));
  };

  return (
    <div className="filters">
      <div className="filters-row">
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
