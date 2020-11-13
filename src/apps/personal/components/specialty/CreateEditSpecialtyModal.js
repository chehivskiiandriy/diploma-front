import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createSpecialty, editSpecialty } from '../../store/specialty/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { CREATE_SPECIALTY_LOADING, DELETE_SPECIALTY_LOADING } from '../../../../store/loading/constants';

const CreateEditAcademicDegreeModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => (
    isTaskLoading(state, CREATE_SPECIALTY_LOADING)
  ));
  const editLoading = usePersonalSelector(state => (
    isTaskLoading(state, DELETE_SPECIALTY_LOADING)
  ));
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

  const onSubmit = async ({ name, number }) => {
    const params = {
      name,
      number: +number,
    };
    if (isEdit) {
      await dispatch(editSpecialty(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createSpecialty(params));
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            {`${isEdit ? 'Редагувати' : 'Додати'} спеціальність`}
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="number"
            name="number"
            ref={register({
              required: 'Будь ласка, введіть номер спеціальності',
              min: {
                value: 1,
                message: 'Будь ласка, введіть коректний номер спеціальності',
              },
              max: {
                value: 9999999,
                message: 'Будь ласка, введіть коректний номер спеціальності',
              },
            })}
            errors={errors}
            label="Номер спеціальності"
            placeholder="Введіть номер спеціальності"
            autoFocus
          />
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву спеціальності',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректнy назву спеціальності',
            })}
            errors={errors}
            label="Спеціальність"
            placeholder="Введіть назву спеціальності"
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

CreateEditAcademicDegreeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditAcademicDegreeModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditAcademicDegreeModal;
