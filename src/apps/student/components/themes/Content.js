import React, { Fragment } from 'react';

import AddThemeRequestModal from './AddThemeRequestModal';
import ThemeRow from './ThemeRow';
import { useStudentSelector } from '../../store/context';
import { themesSelector } from '../../store/theme/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [themeId, setThemeId, clearThemeId] = useSetData(null);
  const themes = useStudentSelector(themesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Викладач</th>
            <th className="th">Студент</th>
            <th className="th">Підтверджена</th>
            <th className="th">Напрям лабораторії</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {themes.map(el => (
            <ThemeRow
              key={el.id}
              theme={el}
              addHandler={setThemeId}
            />
          ))}
        </tbody>
      </table>
      <AddThemeRequestModal
        isOpen={!!themeId}
        closeHandler={clearThemeId}
        themeId={themeId}
      />
    </Fragment>
  );
};

export default Content;
