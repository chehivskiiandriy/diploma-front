import React, { useCallback, useEffect, useRef } from 'react';

import CreateEditStudentModal from '../components/students/CreateEditStudentModal';
import Filters from '../components/students/Filters';
import Content from '../components/students/Content';
import Button from '../../../components/Button';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getStudents, uploadStudents } from '../store/student/thunks';
import { getGroups } from '../store/group/thunks';
import { groupsSelector } from '../store/group/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Students = () => {
  const dispatch = usePersonalDispatch();
  const fileRef = useRef(null);
  const groups = usePersonalSelector(groupsSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getStudents());
    if (!groups.length) {
      dispatch(getGroups());
    }
  }, []);

  const uploadFileHandler = ({ target: { files } }) => {
    const data = new FormData();
    data.append('file', files[0]);
    dispatch(uploadStudents(data));
  };

  const addFileHandler = useCallback(() => {
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  }, [fileRef]);

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
      <Button
        label="Завантажити і додати студентів"
        className="indent-sm-bottom"
        onClick={addFileHandler}
      >
        Завантажити і додати студентів
      </Button>
      <Filters />
      <Content />
      <CreateEditStudentModal isOpen={isOpen} closeHandler={closeHandler} />
      <input
        type="file"
        ref={fileRef}
        className="hide"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={uploadFileHandler}
      />
    </div>
  );
};

export default Students;
