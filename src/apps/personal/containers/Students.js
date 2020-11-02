import React, { useEffect } from 'react';

import CreateEditStudentModal from '../components/students/CreateEditStudentModal';
import Filters from '../components/students/Filters';
import Content from '../components/students/Content';
import Button from '../../../components/Button';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getStudents } from '../store/student/thunks';
import { getGroups } from '../store/group/thunks';
import { groupsSelector } from '../store/group/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Students = () => {
  const dispatch = usePersonalDispatch();
  const groups = usePersonalSelector(groupsSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getStudents());
    if (!groups.length) {
      dispatch(getGroups());
    }
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати студента"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати студента
      </Button>
      <Filters />
      <Content />
      <CreateEditStudentModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Students;
