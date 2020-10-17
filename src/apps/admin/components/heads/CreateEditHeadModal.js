import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { useAdminDispatch, useAdminSelector } from '../../store/context';
import { createHead, editHead } from '../../store/head/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { departmentsOptionsSelector } from '../../store/department/selectors';
import { CREATE_HEAD_LOADING, UPDATE_HEAD_LOADING } from '../../../../store/loading/constants';
import { emailRegexp } from '../../../../utils/validations';

const CreateEditHeadModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = useAdminDispatch();
  const createLoading = useAdminSelector(state => isTaskLoading(state, CREATE_HEAD_LOADING));
  const editLoading = useAdminSelector(state => isTaskLoading(state, UPDATE_HEAD_LOADING));
  const departmentsOptions = useAdminSelector(departmentsOptionsSelector);
  const {
    handleSubmit, register, errors, reset, control,
  } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || createLoading || editLoading
  ), [isErrorsExist, createLoading, editLoading]);

  useEffect(() => {
    if (defaultValues) {
      const values = {
        ...defaultValues,
        department: defaultValues.department && {
          value: defaultValues.department.id,
          label: defaultValues.department.name,
        },
      };

      reset(values);
    }
  }, [defaultValues]);

  const onSubmit = async ({
    firstName, lastName, middleName, email, department,
  }) => {
    const params = {
      firstName,
      lastName,
      middleName,
      email,
      departmentId: department.value,
    };
    if (isEdit) {
      await dispatch(editHead(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createHead(params));
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
            голову кафедри
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="lastName"
            name="lastName"
            ref={register({
              required: 'Будь ласка, введіть прізвище',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректне прізвище',
            })}
            errors={errors}
            label="Прізвище"
            placeholder="Введіть прізвище"
            autoFocus
          />
          <Input
            id="firstName"
            name="firstName"
            ref={register({
              required: 'Будь ласка, введіть ім\'я',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректне ім\'я',
            })}
            errors={errors}
            label="Ім'я"
            placeholder="Введіть ім'я"
          />
          <Input
            id="middleName"
            name="middleName"
            ref={register({
              required: 'Будь ласка, введіть назву кафедри',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректне по батькові',
            })}
            errors={errors}
            label="По батькові"
            placeholder="Введіть по батькові"
          />
          <Input
            id="email"
            name="email"
            ref={register({
              required: 'Будь ласка, введіть електронну адресу',
              pattern: {
                value: emailRegexp,
                message: 'Будь ласка, введіть коректну електронну адресу',
              },
            })}
            errors={errors}
            label="Електронна адреса"
            placeholder="Введіть електронну адресу"
          />
          <Select
            name="department"
            options={departmentsOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть кафедру' }}
            errors={errors}
            label="Кафедра"
            placeholder="Виберіть кафедру"
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

CreateEditHeadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditHeadModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditHeadModal;
