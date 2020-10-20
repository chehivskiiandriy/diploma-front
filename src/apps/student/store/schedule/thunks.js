import api from '../../../../api';
import { setSchedules } from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import { GET_SCHEDULES_LOADING } from '../../../../store/loading/constants';

export const getSchedulesAction = () => async dispatch => {
  try {
    const data = await api.get('/schedule');

    dispatch(setSchedules(data));
  } catch (e) {
    //
  }
};

export const getSchedules = loadingThunk(GET_SCHEDULES_LOADING)(getSchedulesAction);
