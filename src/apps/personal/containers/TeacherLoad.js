import React, { useEffect } from 'react';

import CreateEditTeacherModal from '../components/teacherLoad/CreateEditTeacherLoadModal';
import Content from '../components/teacherLoad/Content';
import Filters from '../components/teacherLoad/Filters';
import Button from '../../../components/Button';
import useIsOpen from '../../../hooks/useIsOpen';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getTeachersLoad } from '../store/teacherLoad/thunks';
import { getTeachers } from '../store/teacher/thunks';
import { getAcademicYears } from '../store/academicYear/thunks';
import { getAcademicDegrees } from '../store/academicDegree/thunks';
import { teachersSelector } from '../store/teacher/selectors';
import { academicYearsSelector } from '../store/academicYear/selectors';
import { academicDegreesSelector } from '../store/academicDegree/selectors';

const TeacherLoad = () => {
  const dispatch = usePersonalDispatch();
  const teachers = usePersonalSelector(teachersSelector);
  const academicYears = usePersonalSelector(academicYearsSelector);
  const academicDegrees = usePersonalSelector(academicDegreesSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getTeachersLoad());
    if (!teachers.length) {
      dispatch(getTeachers());
    }
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
        label="Додати навантаження для викладача"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати навантаження
      </Button>
      <Filters />
      <Content />
      <CreateEditTeacherModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default TeacherLoad;
