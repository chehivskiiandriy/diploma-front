import React from 'react';
import classNames from 'classnames';

import { useTeacherSelector } from '../../store/context';
import { loadByMyThemesSelector } from '../../store/myThemes/selectors';

const ContentLoad = () => {
  const loadByMyThemes = useTeacherSelector(loadByMyThemesSelector);

  return (
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
        {loadByMyThemes && loadByMyThemes.map(el => (
          <tr
            key={el.id}
            className={classNames('tr', { isFull: el.isFull })}
          >
            <td className="td">{el.amount}</td>
            <td className="td">{el.amountThemesByAc}</td>
            <td className="td">{el.academicDegree.name}</td>
            <td className="td">{el.academicYear.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContentLoad;
