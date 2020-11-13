import React, { Fragment } from 'react';

import DeleteRequestModal from './DeleteRequestModal';
import RequestRow from './RequestRow';
import { useStudentSelector } from '../../store/context';
import { requestsSelector } from '../../store/request/selectors';
import useSetData from '../../../../hooks/useSetData';

const Content = () => {
  const [deleteId, setDeleteId, clearDeleteId] = useSetData(null);
  const requests = useStudentSelector(requestsSelector);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Статус</th>
            <th className="th">Тема</th>
            <th className="th">Викладач</th>
            <th className="th">Підтверджена</th>
            <th className="th">Напрям лабораторії</th>
            <th className="th">Дата створення</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(el => (
            <RequestRow
              key={el.id}
              request={el}
              deleteHandler={setDeleteId}
            />
          ))}
        </tbody>
      </table>
      <DeleteRequestModal
        isOpen={!!deleteId}
        closeHandler={clearDeleteId}
        requestId={deleteId}
      />
    </Fragment>
  );
};

export default Content;
