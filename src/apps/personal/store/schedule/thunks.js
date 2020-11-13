import api from '../../../../api';
import {
  setSchedules,
  addSchedule,
  updateSchedule,
  removeSchedule,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_SCHEDULES_LOADING,
  CREATE_SCHEDULE_LOADING,
  UPDATE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_LOADING,
} from '../../../../store/loading/constants';

export const getSchedulesAction = ({ academicYearId, academicDegreeId }) => async dispatch => {
  try {
    const data = await api.get(`/schedule/${academicYearId}/${academicDegreeId}`);

    dispatch(setSchedules(data));
  } catch (e) {
    //
  }
};

export const getSchedules = loadingThunk(GET_SCHEDULES_LOADING)(getSchedulesAction);

export const createScheduleAction = params => async dispatch => {
  try {
    const data = await api.post('/schedule', params);

    dispatch(addSchedule(data));
  } catch (e) {
    //
  }
};

export const createSchedule = loadingThunk(CREATE_SCHEDULE_LOADING)(createScheduleAction);

export const editScheduleAction = (id, params) => async dispatch => {
  try {
    const data = await api.put(`/schedule/${id}`, params);

    dispatch(updateSchedule(data));
  } catch (e) {
    //
  }
};

export const editSchedule = loadingThunk(UPDATE_SCHEDULE_LOADING)(editScheduleAction);

export const deleteScheduleAction = id => async dispatch => {
  try {
    await api.delete(`/schedule/${id}`);

    dispatch(removeSchedule(id));
  } catch (e) {
    //
  }
};

export const deleteSchedule = loadingThunk(DELETE_SCHEDULE_LOADING)(deleteScheduleAction);
