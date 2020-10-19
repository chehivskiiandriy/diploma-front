import React, { Fragment } from 'react';

import CreateEditMyThemeModal from './CreateEditMyThemeModal';
import DeleteMyThemeModal from './DeleteMyThemeModal';
import RequestsModal from './RequestsModal';
import MyThemeRow from './MyThemeRow';
import { useTeacherSelector } from '../../store/context';
import { myThemesSelector } from '../../store/myThemes/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [editData, setEditData, clearEditData] = useSetData(null);
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const [requestsData, setRequestsData, clearRequestsData] = useSetData(null);
  const myThemes = useTeacherSelector(myThemesSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Назва</th>
            <th className="th">Студент</th>
            <th className="th">Підтверджена</th>
            <th className="th">Академічний рік</th>
            <th className="th">Академічний рівень</th>
            <th className="th">Напрям лабораторії</th>
            <th className="th">Заявки</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {myThemes.map(el => (
            <MyThemeRow
              key={el.id}
              theme={el}
              editHandler={setEditData}
              deleteHandler={setDeleteId}
              openRequests={setRequestsData}
            />
          ))}
        </tbody>
      </table>
      <CreateEditMyThemeModal
        isOpen={!!editData}
        closeHandler={clearEditData}
        defaultValues={editData}
        isEdit
      />
      <DeleteMyThemeModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        themeId={deleteId}
      />
      <RequestsModal
        isOpen={!!requestsData}
        closeHandler={clearRequestsData}
        requests={requestsData}
      />
    </Fragment>
  );
};

export default Content;
