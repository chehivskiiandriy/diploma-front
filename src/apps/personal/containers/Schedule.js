import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditScheduleModal from '../components/schedule/CreateEditScheduleModal';
import Filters from '../components/schedule/Filters';
import Content from '../components/schedule/Content';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getSchedules } from '../store/schedule/thunks';
import { getAcademicYears } from '../store/academicYear/thunks';
import { getAcademicDegrees } from '../store/academicDegree/thunks';
import { academicYearsSelector } from '../store/academicYear/selectors';
import { academicDegreesSelector } from '../store/academicDegree/selectors';
import { scheduleFiltersSelector } from '../store/schedule/selectors';

const Schedule = () => {
  const dispatch = usePersonalDispatch();
  const scheduleFilters = usePersonalSelector(scheduleFiltersSelector);
  const academicYears = usePersonalSelector(academicYearsSelector);
  const academicDegrees = usePersonalSelector(academicDegreesSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

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
      <Button
        mode="primary"
        label="Додати графік виконання"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати графік виконання
      </Button>
      <Filters />
      <Content />
      <CreateEditScheduleModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Schedule;
