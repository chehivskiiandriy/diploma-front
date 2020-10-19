import React, { useEffect } from 'react';

import Content from '../components/themes/Content';
import { useStudentDispatch } from '../store/context';
import { getThemes } from '../store/theme/thunks';

const Themes = () => {
  const dispatch = useStudentDispatch();

  useEffect(() => {
    dispatch(getThemes());
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
};

export default Themes;
