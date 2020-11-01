import React, { useEffect } from 'react';
import classNames from 'classnames';

import CreateEditMyThemeModal from '../components/myThemes/CreateEditMyThemeModal';
import Content from '../components/myThemes/Content';
import Button from '../../../components/Button';
import { useTeacherSelector, useTeacherDispatch } from '../store/context';
import { getMyTeacherLoad, getMyThemes } from '../store/myThemes/thunks';
import { getAcademicYears } from '../../personal/store/academicYear/thunks';
import { academicYearsSelector } from '../../personal/store/academicYear/selectors';
import { getAcademicDegrees } from '../../personal/store/academicDegree/thunks';
import { academicDegreesSelector } from '../../personal/store/academicDegree/selectors';
import { getLaboratoriesDirections } from '../../personal/store/laboratoryDirection/thunks';
import { laboratoriesDirectionsSelector } from '../../personal/store/laboratoryDirection/selectors';
import useIsOpen from '../../../hooks/useIsOpen';
import { myLoadSelector, myThemesSelector } from '../store/myThemes/selectors';

const MyThemes = () => {
  const dispatch = useTeacherDispatch();
  const academicYears = useTeacherSelector(academicYearsSelector);
  const academicDegrees = useTeacherSelector(academicDegreesSelector);
  const laboratoriesDirections = useTeacherSelector(laboratoriesDirectionsSelector);
  const myThemes = useTeacherSelector(myThemesSelector);
  const teacherLoad = useTeacherSelector(myLoadSelector);
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  useEffect(() => {
    dispatch(getMyThemes());
    dispatch(getMyTeacherLoad());
    if (!academicYears.length) {
      dispatch(getAcademicYears());
    }
    if (!academicDegrees.length) {
      dispatch(getAcademicDegrees());
    }
    if (!laboratoriesDirections.length) {
      dispatch(getLaboratoriesDirections());
    }
  }, []);

  const amountThemesByAc = (el) => myThemes && myThemes.filter(i => (
    i.academicDegreeId === el.academicDegreeId
    && i.academicYearId === el.academicYearId)).length;

  return (
    <div>
      <div>
        <Button
          mode="primary"
          label="Додати тему"
          className="indent-sm-bottom"
          onClick={openHandler}
        >
          Додати тему
        </Button>
      </div>
      <table className="table loadThemes">
        <thead>
          <tr className="tr">
            <th className="th">Навантаження</th>
            <th className="th">Створено тем</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
          </tr>
        </thead>
        <tbody>
          {teacherLoad && teacherLoad.map(el => (
            <tr
              key={el.id}
              className={classNames('tr', {
                isFull: el.amount === amountThemesByAc(el),
              })}
            >
              <td className="td">{el.amount}</td>
              <td className="td">
                {amountThemesByAc(el)}
              </td>
              <td className="td">{el.academicDegree.name}</td>
              <td className="td">{el.academicYear.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Content />
      <CreateEditMyThemeModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default MyThemes;
