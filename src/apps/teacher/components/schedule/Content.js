import React, { Fragment } from 'react';

import ScheduleRow from './ScheduleRow';
import { useTeacherSelector } from '../../store/context';
import { schedulesSelector } from '../../store/schedule/selectors';

const Content = () => {
  const schedules = useTeacherSelector(schedulesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Перелік робіт</th>
            <th className="th">Дата старту</th>
            <th className="th">Дата закінчення</th>
            <th className="th">Звітні документи</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(el => (
            <ScheduleRow key={el.id} schedule={el} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Content;
