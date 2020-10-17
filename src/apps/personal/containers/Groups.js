import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditGroupModal from '../components/groups/CreateEditGroupModal';
import Content from '../components/groups/Content';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getGroups } from '../store/group/thunks';
import { getAcademicYears } from '../store/academicYear/thunks';
import { getAcademicDegrees } from '../store/academicDegree/thunks';
import { academicYearsSelector } from '../store/academicYear/selectors';
import { academicDegreesSelector } from '../store/academicDegree/selectors';

const Degrees = () => {
  const dispatch = usePersonalDispatch();
  const academicYears = usePersonalSelector(academicYearsSelector);
  const academicDegrees = usePersonalSelector(academicDegreesSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getGroups());
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
        label="Додати групу"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати групу
      </Button>
      <Content />
      <CreateEditGroupModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Degrees;
