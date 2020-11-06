import React, { useEffect } from 'react';

import Filters from '../components/teacherLoad/Filters';
import Content from '../components/teacherLoad/Content';
import { useStudentDispatch, useStudentSelector } from '../store/context';
import { getTeachersLoad } from '../store/teacherLoad/thunks';
import { academicYearsSelector } from '../../personal/store/academicYear/selectors';
import { academicDegreesSelector } from '../../personal/store/academicDegree/selectors';
import { teachersSelector } from '../../personal/store/teacher/selectors';
import { getAcademicYears } from '../../personal/store/academicYear/thunks';
import { getAcademicDegrees } from '../../personal/store/academicDegree/thunks';
import { getTeachers } from '../../personal/store/teacher/thunks';

const TeacherLoad = () => {
  const dispatch = useStudentDispatch();
  const academicYears = useStudentSelector(academicYearsSelector);
  const academicDegrees = useStudentSelector(academicDegreesSelector);
  const teachers = useStudentSelector(teachersSelector);

  useEffect(() => {
    dispatch(getTeachersLoad());
    if (!academicYears.length) {
      dispatch(getAcademicYears());
    }
    if (!academicDegrees.length) {
      dispatch(getAcademicDegrees());
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

export default TeacherLoad;
