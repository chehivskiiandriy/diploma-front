import loading from '../../../store/loading';
import myThemes from './myThemes';
import personal from './personal';
import teacherLoad from './teacherLoad';
import theme from './theme';
import academicDegree from '../../personal/store/academicDegree';
import academicYear from '../../personal/store/academicYear';
import laboratory from '../../personal/store/laboratory';
import laboratoryDirection from '../../personal/store/laboratoryDirection';

const reducers = {
  loading,
  myThemes,
  personal,
  theme,
  academicDegree,
  academicYear,
  laboratory,
  laboratoryDirection,
  teacherLoad,
};

export default reducers;
