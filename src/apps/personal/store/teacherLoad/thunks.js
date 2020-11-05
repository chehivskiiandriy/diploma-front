import api from '../../../../api';
import {
  setTeachersLoad,
  addTeacherLoad,
  updateTeacherLoad,
  removeTeacherLoad,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_TEACHERS_LOAD_LOADING,
  CREATE_TEACHER_LOAD_LOADING,
  UPDATE_TEACHER_LOAD_LOADING,
  DELETE_TEACHER_LOAD_LOADING,
  DOWNLOAD_TEACHER_LOAD_LOADING,
} from '../../../../store/loading/constants';
import { toBlob } from '../../../../api/helpers';
import download from '../../../../utils/download';

export const getTeachersLoadAction = () => async dispatch => {
  try {
    const data = await api.get('/teacher-load');

    dispatch(setTeachersLoad(data));
  } catch (e) {
    //
  }
};

export const getTeachersLoad = loadingThunk(GET_TEACHERS_LOAD_LOADING)(getTeachersLoadAction);

export const createTeacherLoadAction = params => async dispatch => {
  try {
    const data = await api.post('/teacher-load', params);

    dispatch(addTeacherLoad(data));
  } catch (e) {
    //
  }
};

export const createTeacherLoad = loadingThunk(CREATE_TEACHER_LOAD_LOADING)(createTeacherLoadAction);

export const editTeacherLoadAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/teacher-load/${id}`, params);

    dispatch(updateTeacherLoad(data));
  } catch (e) {
    //
  }
};

export const editTeacherLoad = loadingThunk(UPDATE_TEACHER_LOAD_LOADING)(editTeacherLoadAction);

export const deleteTeacherLoadAction = id => async dispatch => {
  try {
    await api.delete(`/teacher-load/${id}`);

    dispatch(removeTeacherLoad(id));
  } catch (e) {
    //
  }
};

export const deleteTeacherLoad = loadingThunk(DELETE_TEACHER_LOAD_LOADING)(deleteTeacherLoadAction);

export const downloadTeacherLoadAction = (academicYear, params) => async () => {
  try {
    const blob = await api.post(`/teacher-load/download/${academicYear.value}`, params, {}, toBlob);
    download(`teacher_load_${academicYear.label}.docx`, blob);
  } catch (e) {
    //
  }
};

export const downloadTeacherLoad = (
  loadingThunk(DOWNLOAD_TEACHER_LOAD_LOADING)(downloadTeacherLoadAction)
);
