import React, { Fragment } from 'react';

import ThemeRow from './ThemeRow';
import { usePersonalSelector } from '../../store/context';
import { filteredThemesSelector } from '../../store/theme/selectors';

const Content = () => {
  const themes = usePersonalSelector(filteredThemesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Викладач</th>
            <th className="th">Студент</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Затверджено</th>
          </tr>
        </thead>
        <tbody>
          {themes.map(el => (
            <ThemeRow
              key={el.id}
              theme={el}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Content;
