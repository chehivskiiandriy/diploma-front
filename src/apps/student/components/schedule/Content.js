import React, { Fragment } from 'react';

import ScheduleRow from './ScheduleRow';
import { useStudentSelector } from '../../store/context';
import { schedulesSelector } from '../../store/schedule/selectors';

const Content = () => {
  const schedules = useStudentSelector(schedulesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Перелік робіт</th>
            <th className="th">Дата старту</th>
            <th className="th">Дата закінчення</th>
            <th className="th">Звітні документи</th>
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
