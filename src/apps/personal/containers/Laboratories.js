import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditLaboratoryModal from '../components/laboratories/CreateEditLaboratoryModal';
import Content from '../components/laboratories/Content';
import { usePersonalDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getLaboratories } from '../store/laboratory/thunks';

const Degrees = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getLaboratories());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати наукову лабораторію"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати лабораторію
      </Button>
      <Content />
      <CreateEditLaboratoryModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Degrees;
