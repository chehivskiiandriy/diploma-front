import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createLaboratoryDirection, editLaboratoryDirection } from '../../store/laboratoryDirection/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { laboratoriesOptionsSelector } from '../../store/laboratory/selectors';
import {
  CREATE_LABORATORY_DIRECTION_LOADING,
  UPDATE_LABORATORY_DIRECTION_LOADING,
} from '../../../../store/loading/constants';

const CreateEditLaboratoryDirectionModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const laboratoriesOptions = usePersonalSelector(laboratoriesOptionsSelector);
  const createLoading = usePersonalSelector(state => (
    isTaskLoading(state, CREATE_LABORATORY_DIRECTION_LOADING)
  ));
  const editLoading = usePersonalSelector(state => (
    isTaskLoading(state, UPDATE_LABORATORY_DIRECTION_LOADING)
  ));
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
        laboratory: defaultValues.laboratory && {
          value: defaultValues.laboratory.id,
          label: defaultValues.laboratory.name,
        },
      };

      reset(values);
    }
  }, [defaultValues]);

  const onSubmit = async ({ name, laboratory }) => {
    const params = {
      name,
      laboratoryId: laboratory.value,
    };
    if (isEdit) {
      await dispatch(editLaboratoryDirection(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createLaboratoryDirection(params));
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
            напрям лабораторії
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть напрям лабораторії',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний напрям лабораторії',
            })}
            errors={errors}
            label="Напрям лабораторії"
            placeholder="Введіть напрям лабораторії"
            autoFocus
          />
          <Select
            name="laboratory"
            options={laboratoriesOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть лабораторію' }}
            errors={errors}
            label="Лабораторія"
            placeholder="Виберіть лабораторію"
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

CreateEditLaboratoryDirectionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditLaboratoryDirectionModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditLaboratoryDirectionModal;
