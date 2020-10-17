import React, { Fragment } from 'react';

import CreateEditLaboratoryModal from './CreateEditLaboratoryModal';
import DeleteLaboratoryModal from './DeleteLaboratoryModal';
import LaboratoryRow from './LaboratoryRow';
import { usePersonalSelector } from '../../store/context';
import { laboratoriesSelector } from '../../store/laboratory/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const laboratories = usePersonalSelector(laboratoriesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {laboratories.map(el => (
            <LaboratoryRow
              key={el.id}
              laboratory={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditLaboratoryModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteLaboratoryModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        laboratoryId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
