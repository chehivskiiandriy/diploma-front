import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import Filters from '../components/themes/Filters';
import Content from '../components/themes/Content';
import DownloadThemesModal from '../components/themes/DownloadThemesModal';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getThemes } from '../store/theme/thunks';
import { getAcademicYears } from '../store/academicYear/thunks';
import { getAcademicDegrees } from '../store/academicDegree/thunks';
import { getStudents } from '../store/student/thunks';
import { getTeachers } from '../store/teacher/thunks';
import { academicYearsSelector } from '../store/academicYear/selectors';
import { academicDegreesSelector } from '../store/academicDegree/selectors';
import { studentsSelector } from '../store/student/selectors';
import { teachersSelector } from '../store/teacher/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Themes = () => {
  const dispatch = usePersonalDispatch();
  const academicYears = usePersonalSelector(academicYearsSelector);
  const academicDegrees = usePersonalSelector(academicDegreesSelector);
  const students = usePersonalSelector(studentsSelector);
  const teachers = usePersonalSelector(teachersSelector);
  const [isOpenDownload, openDownloadHandler, closeDownloadHandler] = useIsOpen(false);

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
      <Button
        label="Завантажити дипломні роботи по групах"
        className="indent-sm-bottom"
        onClick={openDownloadHandler}
      >
        Завантажити дипломні роботи по групах
      </Button>
      <Filters />
      <Content />
      <DownloadThemesModal isOpen={isOpenDownload} closeHandler={closeDownloadHandler} />
    </div>
  );
};

export default Themes;
