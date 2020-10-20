import React, { useEffect } from 'react';

import Content from '../components/myTheme/Content';
import { useStudentDispatch } from '../store/context';
import { getThemeInfo } from '../store/themeInfo/thunks';

const MyTheme = () => {
  const dispatch = useStudentDispatch();

  useEffect(() => {
    dispatch(getThemeInfo());
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
};

export default MyTheme;
