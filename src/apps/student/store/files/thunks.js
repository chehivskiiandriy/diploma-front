import api from '../../../../api';
import {
  setFiles,
  setMyFiles,
  // addFile,
  removeFile,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_FILES_LOADING,
  // CREATE_FILE_LOADING,
  DELETE_FILE_LOADING,
  DOWNLOAD_FILE_LOADING,
} from '../../../../store/loading/constants';
import { pureModifier, toBlob } from '../../../../api/helpers';
import download from '../../../../utils/download';

export const getCommonFilesAction = () => async dispatch => {
  try {
    const data = await api.get('/export/files/1uezZzAPiNqxUFxvZ2e_ePiqGxdSS41Lz');

    dispatch(setFiles(data));
  } catch (e) {
    //
  }
};

export const getCommonFiles = loadingThunk(GET_FILES_LOADING)(getCommonFilesAction);

export const getMyFilesAction = () => async dispatch => {
  try {
    const data = await api.get('/export/student/files');

    dispatch(setMyFiles(data));
  } catch (e) {
    //
  }
};

export const getMyFiles = loadingThunk(GET_FILES_LOADING)(getMyFilesAction);

export const uploadFileAction = (formData) => async () => {
  try {
    await api.post('/export/student/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=',
        'Accept-Encoding': 'gzip, deflate, br',
        // accept: 'multipart/form-data',
      },
      dataModifier: pureModifier,
    });
  } catch (e) {
    //
  }
};

export const uploadFile = loadingThunk(GET_FILES_LOADING)(uploadFileAction);

// export const createRequestAction = themeId => async dispatch => {
//   try {
//     const data = await api.post('/request', { themeId });

//     dispatch(addRequest(data));
//   } catch (e) {
//     //
//   }
// };

// export const createRequest = loadingThunk(CREATE_REQUEST_LOADING)(createRequestAction);

export const deleteFileAction = id => async dispatch => {
  try {
    await api.delete(`/file/${id}`);

    dispatch(removeFile(id));
  } catch (e) {
    //
  }
};

export const deleteFile = loadingThunk(DELETE_FILE_LOADING)(deleteFileAction);

export const downloadFileAction = (file) => async () => {
  try {
    const blob = await api.post(`/export/file/${file.id}`, null, {}, toBlob);
    download(`${file.name}`, blob);
  } catch (e) {
    //
  }
};

export const downloadFile = (
  loadingThunk(DOWNLOAD_FILE_LOADING)(downloadFileAction)
);
