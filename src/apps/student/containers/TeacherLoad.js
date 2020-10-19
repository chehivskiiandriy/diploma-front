import React, { useEffect } from 'react';

import Content from '../components/teacherLoad/Content';
import { useStudentDispatch } from '../store/context';
import { getTeachersLoad } from '../store/teacherLoad/thunks';

const TeacherLoad = () => {
  const dispatch = useStudentDispatch();

  useEffect(() => {
    dispatch(getTeachersLoad());
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
};

export default TeacherLoad;
