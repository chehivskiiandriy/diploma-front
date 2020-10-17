import React, { Fragment } from 'react';

import CreateEditAcademicDegreeModal from './CreateEditAcademicDegreeModal';
import DeleteAcademicDegreeModal from './DeleteAcademicDegreeModal';
import AcademicDegreeRow from './AcademicDegreeRow';
import { usePersonalSelector } from '../../store/context';
import { academicDegreesSelector } from '../../store/academicDegree/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const academicDegrees = usePersonalSelector(academicDegreesSelector);

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
          {academicDegrees.map(el => (
            <AcademicDegreeRow
              key={el.id}
              academicDegree={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditAcademicDegreeModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteAcademicDegreeModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        academicDegreeId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
