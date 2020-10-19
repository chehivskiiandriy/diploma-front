import React, { useEffect } from 'react';

import Content from '../components/teacherLoad/Content';
import { useTeacherDispatch } from '../store/context';
import { getTeachersLoad } from '../store/teacherLoad/thunks';

const TeacherLoad = () => {
  const dispatch = useTeacherDispatch();

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
