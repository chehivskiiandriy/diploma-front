export const ensureSlash = urlStr => (
  /\/$/.test(urlStr) ? urlStr : `${urlStr}/`
);

export const removeSlashFromStart = urlStr => (
  urlStr.replace(/^\//, '')
);

const getSearchParams = query => {
  const params = new URLSearchParams(query);
  return params.toString();
};

export const getQuery = options => (
  (options && options.query) ? `?${getSearchParams(options.query)}` : ''
);

export const lowerCase = str => str.toLowerCase();

export const upperCase = str => str.toUpperCase();

export const isArray = arr => Array.isArray(arr);

export const isObject = (obj) => obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';

export const toCamelCase = str => str
  .replace(/[\s_-](.)/g, upperCase)
  .replace(/[\s_-]/g, '')
  .replace(/^(.)/, lowerCase);

export const toCamelCaseRecursive = obj => {
  if (obj instanceof Blob) {
    return obj;
  }
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj)
      .forEach((k) => {
        n[toCamelCase(k)] = toCamelCaseRecursive(obj[k]);
      });
    return n;
  }
  if (isArray(obj)) {
    return obj.map((i) => toCamelCaseRecursive(i));
  }
  return obj;
};
