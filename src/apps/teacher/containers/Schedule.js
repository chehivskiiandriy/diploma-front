import React, { useEffect } from 'react';

import Filters from '../components/schedule/Filters';
import Content from '../components/schedule/Content';
import { useTeacherDispatch, useTeacherSelector } from '../store/context';
import { getSchedules } from '../store/schedule/thunks';
import { scheduleFiltersSelector } from '../store/schedule/selectors';
import { getAcademicYears } from '../../personal/store/academicYear/thunks';
import { getAcademicDegrees } from '../../personal/store/academicDegree/thunks';
import { academicYearsSelector } from '../../personal/store/academicYear/selectors';
import { academicDegreesSelector } from '../../personal/store/academicDegree/selectors';

const Schedule = () => {
  const dispatch = useTeacherDispatch();
  const scheduleFilters = useTeacherSelector(scheduleFiltersSelector);
  const academicYears = useTeacherSelector(academicYearsSelector);
  const academicDegrees = useTeacherSelector(academicDegreesSelector);

  useEffect(() => {
    const { academicYear, academicDegree } = scheduleFilters;

    if (academicYear && academicDegree) {
      dispatch(getSchedules({
        academicYearId: academicYear.value,
        academicDegreeId: academicDegree.value,
      }));
    }
  }, [scheduleFilters]);

  useEffect(() => {
    if (!academicYears.length) {
      dispatch(getAcademicYears());
    }
    if (!academicDegrees.length) {
      dispatch(getAcademicDegrees());
    }
  }, []);

  return (
    <div>
      <Filters />
      <Content />
    </div>
  );
};

export default Schedule;
