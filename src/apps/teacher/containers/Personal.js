import React, { useEffect } from 'react';

import CreateEditPersonalModal from '../components/personal/CreateEditPersonalModal';
import Content from '../components/personal/Content';
import Button from '../../../components/Button';
import { useTeacherDispatch } from '../store/context';
import { getPersonals } from '../store/personal/thunks';
import useIsOpen from '../../../hooks/useIsOpen';

const Personal = () => {
  const dispatch = useTeacherDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getPersonals());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати персонал"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати персонал
      </Button>
      <Content />
      <CreateEditPersonalModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Personal;
