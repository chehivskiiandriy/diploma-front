import React, { Fragment } from 'react';

import CreateEditSpecialtyModal from './CreateEditSpecialtyModal';
import DeleteSpecialtyModal from './DeleteSpecialtyModal';
import SpecialtyRow from './SpecialtyRow';
import { usePersonalSelector } from '../../store/context';
import { specialitiesSelector } from '../../store/specialty/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const specialities = usePersonalSelector(specialitiesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Номер</th>
            <th className="th">Назва</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {specialities.map(el => (
            <SpecialtyRow
              key={el.id}
              specialty={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditSpecialtyModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteSpecialtyModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        specialtyId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
