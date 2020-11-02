import loading from '../../../store/loading';
import myThemes from './myThemes';
import personal from './personal';
import teacherLoad from './teacherLoad';
import theme from './theme';
import schedule from './schedule';
import academicDegree from '../../personal/store/academicDegree';
import academicYear from '../../personal/store/academicYear';
import laboratory from '../../personal/store/laboratory';
import laboratoryDirection from '../../personal/store/laboratoryDirection';
import student from '../../personal/store/student';
import teacher from '../../personal/store/teacher';

const reducers = {
  loading,
  myThemes,
  personal,
  theme,
  schedule,
  academicDegree,
  academicYear,
  laboratory,
  laboratoryDirection,
  teacherLoad,
  student,
  teacher,
};

export default reducers;
