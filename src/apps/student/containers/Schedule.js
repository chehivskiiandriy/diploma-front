import React, { useEffect } from 'react';

import Content from '../components/schedule/Content';
import { useStudentDispatch } from '../store/context';
import { getSchedules } from '../store/schedule/thunks';

const Schedule = () => {
  const dispatch = useStudentDispatch();

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
