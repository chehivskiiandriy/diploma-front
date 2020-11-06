import React, { Fragment } from 'react';

import CreateEditTeacherModal from './CreateEditTeacherModal';
import DeleteTeacherModal from './DeleteTeacherModal';
import TeacherRow from './TeacherRow';
import { usePersonalSelector } from '../../store/context';
import { filteredTeachersSelector } from '../../store/teacher/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const teachers = usePersonalSelector(filteredTeachersSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Прізвище</th>
            <th className="th">Ім&#39;я</th>
            <th className="th">По батькові</th>
            <th className="th">Електронна адреса</th>
            <th className="th">Наукова ступінь</th>
            <th className="th">Активний</th>
            <th className="th">Дата створення</th>
            <th className="th">Дата редагування</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(el => (
            <TeacherRow
              key={el.id}
              teacher={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditTeacherModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteTeacherModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        teacherId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
