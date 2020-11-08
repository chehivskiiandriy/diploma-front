import React, { useCallback, useEffect, useRef } from 'react';

import CreateEditTeacherModal from '../components/teachers/CreateEditTeacherModal';
import Filters from '../components/teachers/Filters';
import Content from '../components/teachers/Content';
import Button from '../../../components/Button';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import { getTeachers, uploadTeachers } from '../store/teacher/thunks';
import { getDegrees } from '../store/degree/thunks';
import { degreesSelector } from '../store/degree/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Teachers = () => {
  const dispatch = usePersonalDispatch();
  const fileRef = useRef(null);
  const degrees = usePersonalSelector(degreesSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getTeachers());
    if (!degrees.length) {
      dispatch(getDegrees());
    }
  }, []);

  const uploadFileHandler = ({ target: { files } }) => {
    const data = new FormData();
    data.append('file', files[0]);
    dispatch(uploadTeachers(data));
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
        label="Додати викладача"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати викладача
      </Button>
      <Button
        label="Завантажити і додати викладачів"
        className="indent-sm-bottom"
        onClick={addFileHandler}
      >
        Завантажити і додати викладачів
      </Button>
      <Filters />
      <Content />
      <CreateEditTeacherModal isOpen={isOpen} closeHandler={closeHandler} />
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

export default Teachers;
