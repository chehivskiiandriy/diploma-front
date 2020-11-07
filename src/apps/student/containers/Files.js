import React, { useEffect } from 'react';
import Button from '../../../components/Button';

import { useStudentDispatch, useStudentSelector } from '../store/context';
import { commonFilesSelector, myFilesSelector } from '../store/files/selectors';
import {
  getCommonFiles,
  downloadFile,
  uploadFile,
  getMyFiles,
} from '../store/files/thunks';

const Files = () => {
  const dispatch = useStudentDispatch();
  const commonFiles = useStudentSelector(commonFilesSelector);
  const myFiles = useStudentSelector(myFilesSelector);

  useEffect(() => {
    dispatch(getCommonFiles());
    dispatch(getMyFiles());
  }, []);

  const uploadFileHandler = (files) => {
    const data = new FormData();
    data.append('file', files[0]);
    dispatch(uploadFile(data));
  };

  return (
    <div>
      <h3>Загальні документи</h3>
      {commonFiles && commonFiles.map(i => (
        <p key={i.id}>
          {i.name}
          <Button
            mode="primary"
            label="Скачати"
            onClick={() => dispatch(downloadFile(i))}
          >
            Скачати
          </Button>
        </p>
      ))}

      <h3>Мої файли</h3>
      {myFiles && myFiles.map(i => (
        <p key={i.id}>
          {i.name}
          <Button
            mode="primary"
            label="Скачати"
            onClick={() => dispatch(downloadFile(i))}
          >
            Скачати
          </Button>
        </p>
      ))}

      <input type="file" onChange={e => uploadFileHandler(e.target.files)} />
    </div>
  );
};

export default Files;
