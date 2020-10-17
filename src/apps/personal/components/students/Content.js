import React, { Fragment } from 'react';

import CreateEditStudentModal from './CreateEditStudentModal';
import DeleteStudentModal from './DeleteStudentModal';
import StudentRow from './StudentRow';
import { usePersonalSelector } from '../../store/context';
import { studentsSelector } from '../../store/student/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const students = usePersonalSelector(studentsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Прізвище</th>
            <th className="th">Ім&#39;я</th>
            <th className="th">По батькові</th>
            <th className="th">Електронна адреса</th>
            <th className="th">Група</th>
            <th className="th">Активний</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {students.map(el => (
            <StudentRow
              key={el.id}
              student={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditStudentModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteStudentModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        studentId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
