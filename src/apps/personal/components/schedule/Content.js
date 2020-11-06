import React, { Fragment } from 'react';

import CreateEditScheduleModal from './CreateEditScheduleModal';
import DeleteScheduleModal from './DeleteScheduleModal';
import ScheduleRow from './ScheduleRow';
import { usePersonalSelector } from '../../store/context';
import { filteredSchedulesSelector } from '../../store/schedule/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const schedules = usePersonalSelector(filteredSchedulesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Перелік робіт</th>
            <th className="th">Звітні документи</th>
            <th className="th">Дата старту</th>
            <th className="th">Дата закінчення</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Дата створення</th>
            <th className="th">Дата редагування</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(el => (
            <ScheduleRow
              key={el.id}
              schedule={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditScheduleModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteScheduleModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        scheduleId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
