import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createAcademicDegree, editAcademicDegree } from '../../store/academicDegree/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { CREATE_ACADEMIC_DEGREE_LOADING, UPDATE_ACADEMIC_DEGREE_LOADING } from '../../../../store/loading/constants';

const CreateEditAcademicDegreeModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => (
    isTaskLoading(state, CREATE_ACADEMIC_DEGREE_LOADING)
  ));
  const editLoading = usePersonalSelector(state => (
    isTaskLoading(state, UPDATE_ACADEMIC_DEGREE_LOADING)
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
      await dispatch(editAcademicDegree(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createAcademicDegree(params));
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            {`${isEdit ? 'Редагувати' : 'Додати'} академічний рівень`}
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву академічного рівня',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректнy назву академічного рівня',
            })}
            errors={errors}
            label="Академічний рівень"
            placeholder="Введіть академічний рівень"
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
