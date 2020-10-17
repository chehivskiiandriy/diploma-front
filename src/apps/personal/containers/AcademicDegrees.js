import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditAcademicDegreeModal from '../components/academicDegrees/CreateEditAcademicDegreeModal';
import Content from '../components/academicDegrees/Content';
import { usePersonalDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getAcademicDegrees } from '../store/academicDegree/thunks';

const AcademicDegrees = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getAcademicDegrees());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати академічний рівень"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати академічний рівень
      </Button>
      <Content />
      <CreateEditAcademicDegreeModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default AcademicDegrees;
