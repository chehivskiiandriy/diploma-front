import React from 'react';

import ReactSelect from '../../../../components/ReactSelect';
import { useTeacherSelector, useTeacherDispatch } from '../../store/context';
import { academicYearsOptionsSelector } from '../../../personal/store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../../personal/store/academicDegree/selectors';
import { scheduleFiltersSelector } from '../../store/schedule/selectors';
import { setScheduleFilters } from '../../store/schedule/actions';

const Filters = () => {
  const dispatch = useTeacherDispatch();
  const academicYearsOptions = useTeacherSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = useTeacherSelector(academicDegreesOptionsSelector);
  const scheduleFilters = useTeacherSelector(scheduleFiltersSelector);

  const handleChange = type => selectedOption => {
    dispatch(setScheduleFilters({ [type]: selectedOption }));
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
            value={scheduleFilters.academicYear}
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
            value={scheduleFilters.academicDegree}
            onChange={handleChange('academicDegree')}
            options={academicDegreesOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
