import React, { useState, useEffect } from 'react';

import CreateEditStudentModal from '../components/students/CreateEditStudentModal';
import Content from '../components/students/Content';
import Pagination from '../../../components/Pagination';
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
  const [current, setCurrent] = useState(7);

  useEffect(() => {
    dispatch(getStudents());
    if (!groups.length) {
      dispatch(getGroups());
    }
  }, []);

  const changePageHandler = data => {
    setCurrent(data);
  };

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
      <Content />
      <Pagination
        total={150}
        currentPage={current}
        onChange={changePageHandler}
      />
      <CreateEditStudentModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Students;
