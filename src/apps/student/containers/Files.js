import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';

import { useStudentDispatch, useStudentSelector } from '../store/context';
import { commonFilesSelector, myFilesSelector } from '../store/files/selectors';
import {
  getCommonFiles,
  downloadFile,
  uploadFile,
  getMyFiles,
  deleteFile,
} from '../store/files/thunks';

const Item = ({ document, withDelete }) => {
  const dispatch = useStudentDispatch();

  const downloadFileHandler = useCallback(() => {
    dispatch(downloadFile(document));
  }, [document]);

  const deleteFileHandler = useCallback(() => {
    dispatch(deleteFile(document.id));
  }, [document]);

  return (
    <tr key={document.id} className="tr">
      <td className="td">
        {document.name}
      </td>
      <td className="td">
        <Button
          label="Скачати"
          onClick={downloadFileHandler}
        >
          Скачати
        </Button>
        {
          withDelete && (
            <Button
              label="Видалити"
              onClick={deleteFileHandler}
            >
              Видалити
            </Button>
          )
        }
      </td>
    </tr>
  );
};

Item.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  withDelete: PropTypes.bool,
};

Item.defaultProps = {
  withDelete: false,
};

const Files = () => {
  const dispatch = useStudentDispatch();
  const commonFiles = useStudentSelector(commonFilesSelector);
  const myFiles = useStudentSelector(myFilesSelector);
  const fileRef = useRef(null);

  useEffect(() => {
    dispatch(getCommonFiles());
    dispatch(getMyFiles());
  }, []);

  const uploadFileHandler = ({ target: { files } }) => {
    const data = new FormData();
    data.append('file', files[0]);
    dispatch(uploadFile(data));
  };

  const addFileHandler = useCallback(() => {
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  }, [fileRef]);

  return (
    <div>
      <h3 className="indent-sm-bottom">Загальні документи</h3>
      <table className="table indent-sm-bottom">
        <thead>
          <tr className="tr">
            <th className="th">Документ</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {commonFiles && !commonFiles.length && (
            <tr className="tr">
              <td className="td" colSpan={2}>
                <center>Документи відсутні</center>
              </td>
            </tr>
          )}
          {commonFiles && commonFiles.map(i => (
            <Item document={i} />
          ))}
        </tbody>
      </table>

      <h3 className="indent-sm-bottom">Мої файли</h3>
      <table className="table indent-sm-bottom">
        <thead>
          <tr className="tr">
            <th className="th">Документ</th>
            <th className="th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {myFiles && !myFiles.length && (
            <tr className="tr">
              <td className="td" colSpan={2}>
                <center>Документи відсутні</center>
              </td>
            </tr>
          )}
          {myFiles && myFiles.map(i => (
            <Item document={i} withDelete />
          ))}
        </tbody>
      </table>
      <Button
        label="Додати файл"
        mode="primary"
        onClick={addFileHandler}
      >
        Додати файл
      </Button>
      <input className="hide" type="file" ref={fileRef} onChange={uploadFileHandler} />
    </div>
  );
};

export default Files;
