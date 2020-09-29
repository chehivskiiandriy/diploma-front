const routesMap = {
  $root: '/',

  home: '',
  profile: 'profile',
  settings: 'settings',
  login: 'login',
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
  },

  teacher: {
    $root: 'teacher',
  },

  student: {
    $root: 'student',
    myTheme: 'my-theme',
  },

  personal: {
    $root: 'personal',
    groups: 'groups',
    students: 'students',
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
