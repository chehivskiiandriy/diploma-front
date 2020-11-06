import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditSpecialtyModal from '../components/specialty/CreateEditSpecialtyModal';
import Content from '../components/specialty/Content';
import { usePersonalDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getSpecialities } from '../store/specialty/thunks';

const Specialty = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getSpecialities());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати спеціальність"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати спеціальність
      </Button>
      <Content />
      <CreateEditSpecialtyModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Specialty;
