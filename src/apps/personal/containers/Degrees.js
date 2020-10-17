import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditDegreeModal from '../components/degrees/CreateEditDegreeModal';
import Content from '../components/degrees/Content';
import { usePersonalDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getDegrees } from '../store/degree/thunks';

const Degrees = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getDegrees());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати наукову ступінь"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати наукову ступінь
      </Button>
      <Content />
      <CreateEditDegreeModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Degrees;
