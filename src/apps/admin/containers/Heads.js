import React, { useEffect } from 'react';

import CreateEditHeadModal from '../components/heads/CreateEditHeadModal';
import Content from '../components/heads/Content';
import Button from '../../../components/Button';
import { useAdminDispatch, useAdminSelector } from '../store/context';
import { getHeads } from '../store/head/thunks';
import { getDepartments } from '../store/department/thunks';
import { departmentsSelector } from '../store/department/selectors';
import useIsOpen from '../../../hooks/useIsOpen';

const Heads = () => {
  const dispatch = useAdminDispatch();
  const departments = useAdminSelector(departmentsSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getHeads());
    if (!departments.length) {
      dispatch(getDepartments());
    }
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати кафедру"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати голову кафедру
      </Button>
      <Content />
      <CreateEditHeadModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Heads;
