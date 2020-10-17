import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { createGroup, editGroup } from '../../store/group/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { CREATE_GROUP_LOADING, UPDATE_GROUP_LOADING } from '../../../../store/loading/constants';

const CreateEditGroupModal = ({
  isOpen, closeHandler, isEdit, defaultValues,
}) => {
  const dispatch = usePersonalDispatch();
  const createLoading = usePersonalSelector(state => isTaskLoading(state, CREATE_GROUP_LOADING));
  const editLoading = usePersonalSelector(state => isTaskLoading(state, UPDATE_GROUP_LOADING));
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
    name, amountStudents, academicYear, academicDegree,
  }) => {
    const params = {
      name,
      amountStudents: +amountStudents,
      academicYearId: academicYear.value,
      academicDegreeId: academicDegree.value,
    };
    if (isEdit) {
      await dispatch(editGroup(defaultValues.id, params));
      closeHandler();
    } else {
      await dispatch(createGroup(params));
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
            групу
          </h2>
        </header>
        <div className="modal-body">
          <Input
            id="name"
            name="name"
            ref={register({
              required: 'Будь ласка, введіть назву групи',
              validate: value => value.trim() !== '' || 'Будь ласка, введіть коректну назву групи',
            })}
            errors={errors}
            label="Назва групи"
            placeholder="Введіть назву групи"
            autoFocus
          />
          <Input
            id="amountStudents"
            name="amountStudents"
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

CreateEditGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.shape(),
};

CreateEditGroupModal.defaultProps = {
  isEdit: false,
  defaultValues: null,
};

export default CreateEditGroupModal;
