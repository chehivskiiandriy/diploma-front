import api from '../../../../api';
import {
  setTeachersLoad,
} from './actions';
import { loadingThunk } from '../../../../store/loading/thunks';
import {
  GET_TEACHERS_LOAD_LOADING,
} from '../../../../store/loading/constants';

export const getTeachersLoadAction = () => async dispatch => {
  try {
    const data = await api.get('/teacher-load');

    dispatch(setTeachersLoad(data));
  } catch (e) {
    //
  }
};

export const getTeachersLoad = loadingThunk(GET_TEACHERS_LOAD_LOADING)(getTeachersLoadAction);
