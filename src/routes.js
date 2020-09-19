const routesMap = {
  $root: '/',

  home: '',
  profile: 'profile',
  settings: 'settings',
  login: 'login',

  admin: {
    $root: 'admin',
    departments: 'departments',
  },

  head: {

  },

  teacher: {

  },

  student: {
    $root: 'student',
    myTheme: 'my-theme',
  },

  personal: {

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
    (routes, [name, route]) => ({
      ...routes,
      [name]: typeof route === 'string'
        ? join(currentRoot, route, checkIsRoot(name))
        : buildRoutes({ ...route, $root: join(currentRoot, route.$root) }),
    }), {},
  );
};

const routes = buildRoutes(routesMap);

export default routes;
