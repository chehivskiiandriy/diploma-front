import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Content from '../components/schedule/Content';
import { useStudentDispatch } from '../store/context';
import { getSchedules } from '../store/schedule/thunks';
import { userGroupSelector } from '../../../store/user/selectors';

const Schedule = () => {
  const dispatch = useStudentDispatch();
  const userGroup = useSelector(userGroupSelector);

  useEffect(() => {
    if (userGroup) {
      const { academicYearId, academicDegreeId } = userGroup;
      dispatch(getSchedules({ academicYearId, academicDegreeId }));
    }
  }, [userGroup]);

  return (
    <div>
      <Content />
    </div>
  );
};

export default Schedule;
