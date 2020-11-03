import React, { useEffect } from 'react';

import CreateEditTeacherModal from '../components/teachers/CreateEditTeacherModal';
import Filters from '../components/teachers/Filters';
import Content from '../components/teachers/Content';
import Button from '../../../components/Button';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getTeachers } from '../store/teacher/thunks';
import { getDegrees } from '../store/degree/thunks';
import { degreesSelector } from '../store/degree/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Teachers = () => {
  const dispatch = usePersonalDispatch();
  const degrees = usePersonalSelector(degreesSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getTeachers());
    if (!degrees.length) {
      dispatch(getDegrees());
    }
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати викладача"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати викладача
      </Button>
      <Filters />
      <Content />
      <CreateEditTeacherModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Teachers;
