const routesMap = {
  $root: '/',

  home: '',
  profile: 'profile',
  settings: 'settings',
  login: 'login',
  forgotPassword: 'forgot-password',
  recoverPassword: 'recover-password',
  logout: 'logout',

  admin: {
    $root: 'admin',
    departments: 'departments',
    heads: 'heads',
    login: 'login',
    logout: 'logout',
  },

  head: {
    $root: 'head',
    personal: 'personal',
  },

  teacher: {
    $root: 'teacher',
    myThemes: 'my-themes',
    themes: 'themes',
    teacherLoad: 'teacher-load',
    schedule: 'schedule',
  },

  student: {
    $root: 'student',
    myTheme: 'my-theme',
    themes: 'themes',
    requests: 'requests',
    teacherLoad: 'teacher-load',
    schedule: 'schedule',
  },

  personal: {
    $root: 'personal',
    laboratories: 'laboratory',
    laboratoriesDirections: 'laboratory-directions',
    degrees: 'degrees',
    academicYears: 'academic-years',
    academicDegrees: 'academic-degrees',
    groups: 'groups',
    teacherLoad: 'teacher-load',
    students: 'students',
    teachers: 'teachers',
    schedule: 'schedule',
    themes: 'themes',
  },
};

const checkIsRoot = name => name === '$root';

const join = (start, end, isRoot) => {
  if (isRoot) return start;
  return `${start}/${end}`.replace(/\/+/g, '/');
};

const buildRoutes = routes => {
  const currentRoot = routes.$root;

  return Object.entries(routes).reduce(
    (rts, [name, route]) => ({
      ...rts,
      [name]: typeof route === 'string'
        ? join(currentRoot, route, checkIsRoot(name))
        : buildRoutes({ ...route, $root: join(currentRoot, route.$root) }),
    }), {},
  );
};

const routes = buildRoutes(routesMap);

export default routes;
