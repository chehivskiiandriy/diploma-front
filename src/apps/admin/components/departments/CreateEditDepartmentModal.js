import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { useAdminDispatch, useAdminSelector } from '../../store/context';
import { createDepartment, editDepartment } from '../../store/department/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { CREATE_DEPARTMENT_LOADING, UPDATE_DEPARTMENT_LOADING } from '../../../../store/loading/constants';

const CreateEditDepartmentModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = useAdminDispatch();
  const createLoading = useAdminSelector(state => isTaskLoading(state, CREATE_DEPARTMENT_LOADING));
  const editLoading = useAdminSelector(state => isTaskLoading(state, UPDATE_DEPARTMENT_LOADING));
  const {
    handleSubmit, register, errors, reset,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || createLoading || editLoading
  ), [isErrorsExist, createLoading, editLoading]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  const onSubmit = async params => {
    if (isEdit) {
      await dispatch(editDepartment(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createDepartment(params));
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            {isEdit ? 'Редагувати' : 'Додати'}
            &nbsp;
            кафедру
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву кафедри',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректнy назву кафедри',
            })}
            errors={errors}
            label="Назва"
            placeholder="Введіть назву"
            autoFocus
          />
        </div>
        <div className="modal-footer">
          <Button
            type="submit"
            mode="primary"
            label="Submit"
            disabled={disabled}
          >
            {isEdit ? 'Змінити' : 'Створити'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

CreateEditDepartmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditDepartmentModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditDepartmentModal;
