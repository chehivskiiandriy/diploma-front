import React, { Fragment } from 'react';

import CreateEditDepartmentModal from './CreateEditDepartmentModal';
import DeleteDepartmentModal from './DeleteDepartmentModal';
import DepartmentRow from './DepartmentRow';
import { useAdminSelector } from '../../store/context';
import { departmentsSelector } from '../../store/department/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const departments = useAdminSelector(departmentsSelector);

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
          {departments.map(el => (
            <DepartmentRow
              key={el.id}
              department={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <CreateEditDepartmentModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteDepartmentModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        departmentId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
