import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditLaboratoryDirectionModal from '../components/laboratoriesDirections/CreateEditLaboratoryDirectionModal';
import Content from '../components/laboratoriesDirections/Content';
import { usePersonalDispatch, usePersonalSelector } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getLaboratories } from '../store/laboratory/thunks';
import { getLaboratoriesDirections } from '../store/laboratoryDirection/thunks';
import { laboratoriesSelector } from '../store/laboratory/selectors';

const Degrees = () => {
  const dispatch = usePersonalDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);
  const laboratories = usePersonalSelector(laboratoriesSelector);

  useEffect(() => {
    dispatch(getLaboratoriesDirections());
    if (!laboratories.length) {
      dispatch(getLaboratories());
    }
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати напрям лабораторії"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати напрям лабораторії
      </Button>
      <Content />
      <CreateEditLaboratoryDirectionModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Degrees;
