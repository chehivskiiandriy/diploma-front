import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { useTeacherSelector, useTeacherDispatch } from '../../store/context';
import { createMyTheme, editMyTheme } from '../../store/myThemes/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { academicYearsOptionsSelector } from '../../../personal/store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../../personal/store/academicDegree/selectors';
import { laboratoriesDirectionsOptionsSelector } from '../../../personal/store/laboratoryDirection/selectors';

import { CREATE_GROUP_LOADING, UPDATE_GROUP_LOADING } from '../../../../store/loading/constants';

const CreateEditMyThemeModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = useTeacherDispatch();
  const createLoading = useTeacherSelector(state => isTaskLoading(state, CREATE_GROUP_LOADING));
  const editLoading = useTeacherSelector(state => isTaskLoading(state, UPDATE_GROUP_LOADING));
  const academicYearsOptions = useTeacherSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = useTeacherSelector(academicDegreesOptionsSelector);
  const laboratoriesDirectionsOptions = useTeacherSelector(laboratoriesDirectionsOptionsSelector);
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
        academicYear: defaultValues.academicYear && {
          value: defaultValues.academicYear.id,
          label: defaultValues.academicYear.name,
        },
        academicDegree: defaultValues.academicDegree && {
          value: defaultValues.academicDegree.id,
          label: defaultValues.academicDegree.name,
        },
        laboratoryDirection: defaultValues.laboratoryDirection && {
          value: defaultValues.laboratoryDirection.id,
          label: defaultValues.laboratoryDirection.name,
        },
      };

      reset(values);
    }
  }, [defaultValues]);

  const onSubmit = async ({
    name, academicYear, academicDegree, laboratoryDirection,
  }) => {
    const params = {
      name,
      academicYearId: academicYear.value,
      academicDegreeId: academicDegree.value,
      laboratoryDirectionId: laboratoryDirection.value,
    };
    if (isEdit) {
      await dispatch(editMyTheme(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createMyTheme(params));
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
            тему
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву теми',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректну назву теми',
            })}
            errors={errors}
            label="Назва теми"
            placeholder="Введіть назву теми"
            autoFocus
          />
          <Select
            name="academicYear"
            options={academicYearsOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть академічний рік' }}
            errors={errors}
            label="Академічний рік"
            placeholder="Виберіть академічний рік"
          />
          <Select
            name="academicDegree"
            options={academicDegreesOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть академічний рівень' }}
            errors={errors}
            label="Академічний рівень"
            placeholder="Виберіть академічний рівень"
          />
          <Select
            name="laboratoryDirection"
            options={laboratoriesDirectionsOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть напрям лабораторії' }}
            errors={errors}
            label="Напрям лабораторії"
            placeholder="Виберіть напрям лабораторії"
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

CreateEditMyThemeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditMyThemeModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditMyThemeModal;
