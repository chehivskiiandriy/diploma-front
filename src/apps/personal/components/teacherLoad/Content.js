import React, { Fragment } from 'react';

import CreateEditTeacherLoadModal from './CreateEditTeacherLoadModal';
import DeleteTeacherLoadModal from './DeleteTeacherLoadModal';
import TeacherLoadRow from './TeacherLoadRow';
import { usePersonalSelector } from '../../store/context';
import { teachersLoadSelector } from '../../store/teacherLoad/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const teachersLoad = usePersonalSelector(teachersLoadSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Викладач</th>
            <th className="th">Кількість студентів</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {teachersLoad.map(el => (
            <TeacherLoadRow
              key={el.id}
              teacherLoad={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditTeacherLoadModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteTeacherLoadModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        teacherLoadId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
