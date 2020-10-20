import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createSchedule, editSchedule } from '../../store/schedule/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { CREATE_SCHEDULE_LOADING, UPDATE_SCHEDULE_LOADING } from '../../../../store/loading/constants';

const CreateEditScheduleModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => isTaskLoading(state, CREATE_SCHEDULE_LOADING));
  const editLoading = usePersonalSelector(state => isTaskLoading(state, UPDATE_SCHEDULE_LOADING));
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
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
      };

      reset(values);
    }
  }, [defaultValues]);

  const onSubmit = async ({
    name, description, startDate, endDate, academicYear, academicDegree,
  }) => {
    const params = {
      name,
      description,
      startDate,
      endDate,
      academicYearId: academicYear.value,
      academicDegreeId: academicDegree.value,
    };
    if (isEdit) {
      await dispatch(editSchedule(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createSchedule(params));
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
            графік виконання
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть перелік робіт',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректний перелік робіт',
            })}
            errors={errors}
            label="Перелік робіт"
            placeholder="Введіть перелік робіт"
            autoFocus
          />
          <Input
            id="description"
            name="description"
            ref={register({
              required: 'Будь ласка, введіть звітні документи',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректні звітні документи',
            })}
            errors={errors}
            label="Звітні документи"
            placeholder="Введіть звітні документи"
          />
          <Input
            id="startDate"
            name="startDate"
            ref={register({
              required: 'Будь ласка, введіть дату старту',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректну дату старту',
            })}
            errors={errors}
            label="Дата старту"
            placeholder="Введіть дату старту"
          />
          <Input
            id="endDate"
            name="endDate"
            ref={register({
              required: 'Будь ласка, введіть дату закінчення',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректну дату закінчення',
            })}
            errors={errors}
            label="Дата закінчення"
            placeholder="Введіть дату закінчення"
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

CreateEditScheduleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditScheduleModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditScheduleModal;
