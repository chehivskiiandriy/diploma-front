import React, { Fragment } from 'react';

import CreateEditHeadModal from './CreateEditHeadModal';
import DeleteHeadModal from './DeleteHeadModal';
import HeadRow from './HeadRow';
import { useAdminSelector } from '../../store/context';
import { headsSelector } from '../../store/head/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const heads = useAdminSelector(headsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Прізвище</th>
            <th className="th">Ім&#39;я</th>
            <th className="th">По батькові</th>
            <th className="th">Електронна адреса</th>
            <th className="th">Кафедра</th>
            <th className="th">Активний</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {heads.map(el => (
            <HeadRow
              key={el.id}
              head={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditHeadModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteHeadModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        headId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
