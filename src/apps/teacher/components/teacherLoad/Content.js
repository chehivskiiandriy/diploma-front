import React, { Fragment } from 'react';

import TeacherLoadRow from './TeacherLoadRow';
import { useTeacherSelector } from '../../store/context';
import { filteredTeacherLoadSelector } from '../../store/teacherLoad/selectors';

const Content = () => {
  const teachersLoad = useTeacherSelector(filteredTeacherLoadSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Викладач</th>
            <th className="th">Кількість студентів</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
          </tr>
        </thead>
        <tbody>
          {teachersLoad.map(el => (
            <TeacherLoadRow
              key={el.id}
              teacherLoad={el}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Content;
