import React, { Fragment } from 'react';

import CreateEditLaboratoryDirectionModal from './CreateEditLaboratoryDirectionModal';
import DeleteLaboratoryDirectionModal from './DeleteLaboratoryDirectionModal';
import LaboratoryDirectionRow from './LaboratoryDirectionRow';
import { usePersonalSelector } from '../../store/context';
import { laboratoriesDirectionsSelector } from '../../store/laboratoryDirection/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const laboratoriesDirections = usePersonalSelector(laboratoriesDirectionsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Лабораторія</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {laboratoriesDirections.map(el => (
            <LaboratoryDirectionRow
              key={el.id}
              laboratoryDirection={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditLaboratoryDirectionModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteLaboratoryDirectionModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        laboratoryDirectionId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
