import React, { Fragment } from 'react';

import CreateEditDegreeModal from './CreateEditDegreeModal';
import DeleteDegreeModal from './DeleteDegreeModal';
import DegreeRow from './DegreeRow';
import { usePersonalSelector } from '../../store/context';
import { degreesSelector } from '../../store/degree/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const degrees = usePersonalSelector(degreesSelector);

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
          {degrees.map(el => (
            <DegreeRow
              key={el.id}
              degree={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditDegreeModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteDegreeModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        degreeId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
