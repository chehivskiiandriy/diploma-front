import React, { Fragment } from 'react';

import CreateEditAcademicYearModal from './CreateEditAcademicYearModal';
import DeleteAcademicYearModal from './DeleteAcademicYearModal';
import AcademicYearRow from './AcademicYearRow';
import { usePersonalSelector } from '../../store/context';
import { academicYearsSelector } from '../../store/academicYear/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const academicYears = usePersonalSelector(academicYearsSelector);

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
          {academicYears.map(el => (
            <AcademicYearRow
              key={el.id}
              academicYear={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditAcademicYearModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteAcademicYearModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        academicYearId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
