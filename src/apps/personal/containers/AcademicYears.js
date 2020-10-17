import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditAcademicYearModal from '../components/academicYears/CreateEditAcademicYearModal';
import Content from '../components/academicYears/Content';
import { usePersonalDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getAcademicYears } from '../store/academicYear/thunks';

const AcademicDegrees = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getAcademicYears());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати академічний рік"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати академічний рік
      </Button>
      <Content />
      <CreateEditAcademicYearModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default AcademicDegrees;
