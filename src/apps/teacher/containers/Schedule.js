import React, { useEffect } from 'react';

import Content from '../components/schedule/Content';
import { useTeacherDispatch } from '../store/context';
import { getSchedules } from '../store/schedule/thunks';

const Schedule = () => {
  const dispatch = useTeacherDispatch();

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
};

export default Schedule;
