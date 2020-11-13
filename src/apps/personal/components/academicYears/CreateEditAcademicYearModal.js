import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createAcademicYear, editAcademicYear } from '../../store/academicYear/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { CREATE_ACADEMIC_YEAR_LOADING, UPDATE_ACADEMIC_YEAR_LOADING } from '../../../../store/loading/constants';

const CreateEditAcademicYearModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => (
    isTaskLoading(state, CREATE_ACADEMIC_YEAR_LOADING)
  ));
  const editLoading = usePersonalSelector(state => (
    isTaskLoading(state, UPDATE_ACADEMIC_YEAR_LOADING)
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

  const onSubmit = async params => {
    if (isEdit) {
      await dispatch(editAcademicYear(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createAcademicYear(params));
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            {`${isEdit ? 'Редагувати' : 'Додати'} академічний рік`}
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву академічного року',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректнy назву академічного року',
            })}
            errors={errors}
            label="Академічний рік"
            placeholder="Введіть академічний рік"
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

CreateEditAcademicYearModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditAcademicYearModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditAcademicYearModal;
