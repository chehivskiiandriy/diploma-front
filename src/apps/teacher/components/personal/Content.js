import React, { Fragment } from 'react';

import CreateEditPersonalModal from './CreateEditPersonalModal';
import DeletePersonalModal from './DeletePersonalModal';
import PersonalRow from './PersonalRow';
import { useTeacherSelector } from '../../store/context';
import { personalsSelector } from '../../store/personal/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const personals = useTeacherSelector(personalsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Прізвище</th>
            <th className="th">Ім&#39;я</th>
            <th className="th">По батькові</th>
            <th className="th">Електронна адреса</th>
            <th className="th">Активний</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {personals.map(el => (
            <PersonalRow
              key={el.id}
              personal={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditPersonalModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeletePersonalModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        personalId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
