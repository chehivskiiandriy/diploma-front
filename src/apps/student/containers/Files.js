import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';

import { useStudentDispatch, useStudentSelector } from '../store/context';
import { commonFilesSelector, myFilesSelector } from '../store/files/selectors';
import {
  getCommonFiles,
  downloadFile,
  uploadFile,
  getMyFiles,
} from '../store/files/thunks';

const Item = ({ document }) => {
  const downloadFileHandler = useCallback(() => {
    downloadFile(document);
  }, [document]);

  return (
    <p key={document.id}>
      {document.name}
      <Button
        mode="primary"
        label="Скачати"
        onClick={downloadFileHandler}
      >
        Скачати
      </Button>
    </p>
  );
};

Item.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const Files = () => {
  const dispatch = useStudentDispatch();
  const commonFiles = useStudentSelector(commonFilesSelector);
  const myFiles = useStudentSelector(myFilesSelector);

  useEffect(() => {
    dispatch(getCommonFiles());
    dispatch(getMyFiles());
  }, []);

  const uploadFileHandler = ({ target: { files } }) => {
    const data = new FormData();
    data.append('file', files[0]);
    console.log('FILE', files[0]);

    dispatch(uploadFile(data));

    // const reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = function () {
    //   console.log(reader.result);
    //   dispatch(uploadFile(reader.result));
    // };
    // reader.onerror = function () {
    //   console.log(reader.error);
    // };
  };

  return (
    <div>
      <h3>Загальні документи</h3>
      {commonFiles && commonFiles.map(i => (
        <Item document={i} />
      ))}

      <h3>Мої файли</h3>
      {myFiles && myFiles.map(i => (
        <Item document={i} />
      ))}

      <input type="file" onChange={uploadFileHandler} />
    </div>
  );
};

export default Files;
