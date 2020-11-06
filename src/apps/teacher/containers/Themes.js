import React, { useEffect } from 'react';

import Filters from '../components/themes/Filters';
import Content from '../components/themes/Content';
import { useTeacherDispatch, useTeacherSelector } from '../store/context';
import { getThemes } from '../store/theme/thunks';
import { getAcademicYears } from '../../personal/store/academicYear/thunks';
import { getAcademicDegrees } from '../../personal/store/academicDegree/thunks';
import { getStudents } from '../../personal/store/student/thunks';
import { getTeachers } from '../../personal/store/teacher/thunks';
import { academicYearsSelector } from '../../personal/store/academicYear/selectors';
import { academicDegreesSelector } from '../../personal/store/academicDegree/selectors';
import { studentsSelector } from '../../personal/store/student/selectors';
import { teachersSelector } from '../../personal/store/teacher/selectors';

const Themes = () => {
  const dispatch = useTeacherDispatch();
  const academicYears = useTeacherSelector(academicYearsSelector);
  const academicDegrees = useTeacherSelector(academicDegreesSelector);
  const students = useTeacherSelector(studentsSelector);
  const teachers = useTeacherSelector(teachersSelector);

  useEffect(() => {
    dispatch(getThemes());
    if (!academicYears.length) {
      dispatch(getAcademicYears());
    }
    if (!academicDegrees.length) {
      dispatch(getAcademicDegrees());
    }
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
