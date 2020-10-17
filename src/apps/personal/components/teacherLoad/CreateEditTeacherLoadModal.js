import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createTeacherLoad, editTeacherLoad } from '../../store/teacherLoad/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { teachersOptionsSelector } from '../../store/teacher/selectors';
import { CREATE_TEACHER_LOAD_LOADING, UPDATE_TEACHER_LOAD_LOADING } from '../../../../store/loading/constants';

const CreateEditTeacherLoadModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => (
    isTaskLoading(state, CREATE_TEACHER_LOAD_LOADING)
  ));
  const editLoading = usePersonalSelector(state => (
    isTaskLoading(state, UPDATE_TEACHER_LOAD_LOADING)
  ));
  const teachersOptions = usePersonalSelector(teachersOptionsSelector);
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
        user: defaultValues.user && {
          value: defaultValues.user.id,
          label: `${defaultValues.user.lastName} ${defaultValues.user.firstName} ${defaultValues.user.middleName}`,
        },
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
    user, amount, academicYear, academicDegree,
  }) => {
    const params = {
      userId: user.value,
      amount: +amount,
      academicYearId: academicYear.value,
      academicDegreeId: academicDegree.value,
    };
    if (isEdit) {
      await dispatch(editTeacherLoad(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createTeacherLoad(params));
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
            навантаження
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="amount"
            name="amount"
            type="number"
            ref={register({
              required: 'Будь ласка, введіть кількість студентів',
              min: {
                value: 1,
                message: 'Будь ласка, введіть коректну кількість студентів',
              },
              max: {
                value: 30,
                message: 'Будь ласка, введіть коректну кількість студентів',
              },
            })}
            errors={errors}
            label="Кількість студентів"
            placeholder="Введіть кількість студентів"
          />
          <Select
            name="user"
            options={teachersOptions}
            control={control}
            rules={{ required: 'Будь ласка, виберіть викладача' }}
            errors={errors}
            label="Викладач"
            placeholder="Виберіть викладача"
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

CreateEditTeacherLoadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditTeacherLoadModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditTeacherLoadModal;
