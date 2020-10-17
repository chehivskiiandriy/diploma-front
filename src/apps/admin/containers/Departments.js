import React, { useEffect } from 'react';

import Button from '../../../components/Button';
import CreateEditDepartmentModal from '../components/departments/CreateEditDepartmentModal';
import Content from '../components/departments/Content';
import { useAdminDispatch } from '../store/context';
import useIsOpen from '../../../hooks/useIsOpen';
import { getDepartments } from '../store/department/thunks';

const Departments = () => {
  const dispatch = useAdminDispatch();
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  return (
    <div>
      <Button
        mode="primary"
        label="Додати кафедру"
        className="indent-sm-bottom"
        onClick={openHandler}
      >
        Додати кафедру
      </Button>
      <Content />
      <CreateEditDepartmentModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Departments;
