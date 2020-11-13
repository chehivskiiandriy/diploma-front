import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createStudent, editStudent } from '../../store/student/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { groupsOptionsSelector } from '../../store/group/selectors';
import { CREATE_STUDENT_LOADING, UPDATE_STUDENT_LOADING } from '../../../../store/loading/constants';
import { emailRegexp } from '../../../../utils/validations';

const CreateEditStudentModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => isTaskLoading(state, CREATE_STUDENT_LOADING));
  const editLoading = usePersonalSelector(state => isTaskLoading(state, UPDATE_STUDENT_LOADING));
  const groupsOptions = usePersonalSelector(groupsOptionsSelector);
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
        group: defaultValues.group && {
          value: defaultValues.group.id,
          label: defaultValues.group.name,
        },
      };

      reset(values);
    }
  }, [defaultValues]);

  const onSubmit = async ({
    firstName, lastName, middleName, email, group,
  }) => {
    const params = {
      firstName,
      lastName,
      middleName,
      email,
      groupId: group.value,
    };
    if (isEdit) {
      await dispatch(editStudent(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createStudent(params));
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            {`${isEdit ? 'Редагувати' : 'Додати'} студента`}
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
            name="group"
            options={groupsOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть групу' }}
            errors={errors}
            label="Група"
            placeholder="Виберіть групу"
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

CreateEditStudentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditStudentModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditStudentModal;
