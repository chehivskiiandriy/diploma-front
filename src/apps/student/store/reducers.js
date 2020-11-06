import loading from '../../../store/loading';
import theme from './theme';
import themeInfo from './themeInfo';
import schedule from './schedule';
import request from './request';
import teacherLoad from './teacherLoad';
import academicDegree from '../../personal/store/academicDegree';
import academicYear from '../../personal/store/academicYear';
import student from '../../personal/store/student';
import teacher from '../../personal/store/teacher';

const reducers = {
  loading,
  theme,
  schedule,
  request,
  teacherLoad,
  themeInfo,
  academicDegree,
  academicYear,
  student,
  teacher,
};

export default reducers;
