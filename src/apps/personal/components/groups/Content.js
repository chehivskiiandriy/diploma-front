import React, { Fragment } from 'react';

import CreateEditGroupModal from './CreateEditGroupModal';
import DeleteGroupModal from './DeleteGroupModal';
import GroupRow from './GroupRow';
import { usePersonalSelector } from '../../store/context';
import { filteredGroupsSelector } from '../../store/group/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const groups = usePersonalSelector(filteredGroupsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Кількість студентів</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Спеціальність</th>
            <th className="th">Дата створення</th>
            <th className="th">Дата редагування</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(el => (
            <GroupRow
              key={el.id}
              group={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditGroupModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteGroupModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        groupId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
