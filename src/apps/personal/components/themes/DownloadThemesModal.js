import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { usePersonalDispatch, usePersonalSelector } from '../../store/context';
import { downloadThemes } from '../../store/theme/thunks';
import useFormErrors from '../../../../hooks/useFormErrors';
import { isTaskLoading } from '../../../../store/loading/selectors';
import { academicYearsOptionsSelector } from '../../store/academicYear/selectors';
import { academicDegreesOptionsSelector } from '../../store/academicDegree/selectors';
import { DOWNLOAD_THEMES_LOADING } from '../../../../store/loading/constants';

const DownloadThemesModal = ({ isOpen, closeHandler }) => {
  const dispatch = usePersonalDispatch();
  const loading = usePersonalSelector(state => (
    isTaskLoading(state, DOWNLOAD_THEMES_LOADING)
  ));
  const academicYearsOptions = usePersonalSelector(academicYearsOptionsSelector);
  const academicDegreesOptions = usePersonalSelector(academicDegreesOptionsSelector);
  const { handleSubmit, errors, control } = useForm({ mode: 'onBlur' });
  const isErrorsExist = useFormErrors(errors);
  const disabled = useMemo(() => (
    isErrorsExist || loading
  ), [isErrorsExist, loading]);

  const onSubmit = async params => {
    await dispatch(downloadThemes(params));
    closeHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} withCloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="modal-header">
          <h2>
            Загрузити теми по групах
          </h2>
        </header>
        <div className="modal-body">
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
            Загрузити
          </Button>
        </div>
      </form>
    </Modal>
  );
};

DownloadThemesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default DownloadThemesModal;
