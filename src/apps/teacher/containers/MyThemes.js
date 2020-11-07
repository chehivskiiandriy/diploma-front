import React, { useEffect } from 'react';

import CreateEditMyThemeModal from '../components/myThemes/CreateEditMyThemeModal';
import Filters from '../components/myThemes/Filters';
import Content from '../components/myThemes/Content';
import ContentLoad from '../components/myThemes/ContentLoad';
import Button from '../../../components/Button';
import { useTeacherSelector, useTeacherDispatch } from '../store/context';
import { getMyTeacherLoad, getMyThemes } from '../store/myThemes/thunks';
import { getAcademicYears } from '../../personal/store/academicYear/thunks';
import { academicYearsSelector } from '../../personal/store/academicYear/selectors';
import { getAcademicDegrees } from '../../personal/store/academicDegree/thunks';
import { academicDegreesSelector } from '../../personal/store/academicDegree/selectors';
import { getLaboratoriesDirections } from '../../personal/store/laboratoryDirection/thunks';
import { laboratoriesDirectionsSelector } from '../../personal/store/laboratoryDirection/selectors';
import useIsOpen from '../../../hooks/useIsOpen';
import { getStudents } from '../../personal/store/student/thunks';
import { studentsSelector } from '../../personal/store/student/selectors';

const MyThemes = () => {
  const dispatch = useTeacherDispatch();
  const academicYears = useTeacherSelector(academicYearsSelector);
  const academicDegrees = useTeacherSelector(academicDegreesSelector);
  const students = useTeacherSelector(studentsSelector);
  const laboratoriesDirections = useTeacherSelector(laboratoriesDirectionsSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getMyThemes());
    dispatch(getMyTeacherLoad());
    if (!academicYears.length) {
      dispatch(getAcademicYears());
    }
    if (!academicDegrees.length) {
      dispatch(getAcademicDegrees());
    }
    if (!laboratoriesDirections.length) {
      dispatch(getLaboratoriesDirections());
    }
    if (!students.length) {
      dispatch(getStudents());
    }
  }, []);

  return (
    <div>
      <div>
        <Button
          mode="primary"
          label="Додати тему"
          className="indent-sm-bottom"
          onClick={openHandler}
        >
          Додати тему
        </Button>
        <Filters />
      </div>
      <ContentLoad />
      <Content />
      <CreateEditMyThemeModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default MyThemes;
