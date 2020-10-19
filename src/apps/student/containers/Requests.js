import React, { useEffect } from 'react';

import Content from '../components/requests/Content';
import { useStudentDispatch } from '../store/context';
import { getRequests } from '../store/request/thunks';

const Requests = () => {
  const dispatch = useStudentDispatch();

  useEffect(() => {
    dispatch(getRequests());
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
};

export default Requests;
