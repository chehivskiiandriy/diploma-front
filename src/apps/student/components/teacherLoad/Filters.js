import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import Input from '../../../../components/Input';
import { useStudentSelector, useStudentDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../../personal/store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../../personal/store/academicDegree/selectors';
import { teachersOptionsSelector } from '../../../personal/store/teacher/selectors';
import { teacherLoadFiltersSelector } from '../../store/teacherLoad/selectors';
import { setTeachersLoadFilters } from '../../store/teacherLoad/actions';

const Filters = () => {
  const dispatch = useStudentDispatch();
  const academicYearsOptions = useStudentSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = useStudentSelector(academicDegreesOptionsSelector);
  const teachersOptions = useStudentSelector(teachersOptionsSelector);
  const teacherLoadFilters = useStudentSelector(teacherLoadFiltersSelector);

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
