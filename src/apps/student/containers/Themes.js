import React, { useEffect } from 'react';

import Filters from '../components/themes/Filters';
import Content from '../components/themes/Content';
import { useStudentDispatch, useStudentSelector } from '../store/context';
import { getThemes } from '../store/theme/thunks';
import { getStudents } from '../../personal/store/student/thunks';
import { getTeachers } from '../../personal/store/teacher/thunks';
import { studentsSelector } from '../../personal/store/student/selectors';
import { teachersSelector } from '../../personal/store/teacher/selectors';

const Themes = () => {
  const dispatch = useStudentDispatch();
  const students = useStudentSelector(studentsSelector);
  const teachers = useStudentSelector(teachersSelector);

  useEffect(() => {
    dispatch(getThemes());
    if (!students.length) {
      dispatch(getStudents());
    }
    if (!teachers.length) {
      dispatch(getTeachers());
    }
  }, []);

  return (
    <div>
      <Filters />
      <Content />
    </div>
  );
};

export default Themes;
