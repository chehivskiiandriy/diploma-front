import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CreateEditMyThemeModal from './ApproveThemeModal';
import DeleteMyThemeModal from './DeclineThemeModal';
import ThemeRow from './ThemeRow';
import { useTeacherSelector } from '../../store/context';
import { filteredThemesSelector } from '../../store/theme/selectors';
import useSetData from '../../../../hooks/useSetData';
import { isHeadSelector } from '../../../../store/user/selectors';

const Content = () => {
  const [approveId, setApproveId, clearApproveId] = useSetData(null);
  const [declineId, setDeclineId, clearDeclineId] = useSetData(null);
  const themes = useTeacherSelector(filteredThemesSelector);
  const isHead = useSelector(isHeadSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Викладач</th>
            <th className="th">Студент</th>
            <th className="th">Підтверджена</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Напрям лабораторії</th>
            {isHead && <th className="th">Дії</th>}
          </tr>
        </thead>
        <tbody>
          {themes.map(el => (
            <ThemeRow
              key={el.id}
              theme={el}
              isHead={isHead}
              approveHandler={setApproveId}
              declineHandler={setDeclineId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditMyThemeModal
        isOpen={!!approveId}
        closeHandler={clearApproveId}
        themeId={approveId}
      />
      <DeleteMyThemeModal
        isOpen={!!declineId}
        closeHandler={clearDeclineId}
        themeId={declineId}
      />
    </Fragment>
  );
};

export default Content;
