import { requestMethods, commonHeaders } from './constants';
import { getQuery, removeSlashFromStart, ensureSlash } from './utils';
import { COOKIE_ADMIN_TOKEN_KEY, COOKIE_TOKEN_KEY, deleteToken } from './token';

export const check = response => (
  response.ok ? response : Promise.reject(response)
);

export const toJson = response => response.json();
export const toBlob = response => response.blob();
export const toFormData = response => response.formData();
export const toText = response => response.text();
export const toArrayBuffer = response => response.arrayBuffer();

export const idX = x => x;
export const pureResult = idX;
export const pureModifier = idX;

export const commonOptions = ({
  redirect, referrerPolicy, mode, credentials,
}) => ({
  mode: mode || 'cors',
  credentials: credentials || 'same-origin',
  redirect: redirect || 'follow',
  referrerPolicy: referrerPolicy || 'no-referrer',
});

const stringify = data => (data ? JSON.stringify(data) : null);

export const requestData = (data, method, dataModifier) => {
  if ((method === requestMethods.get || method === requestMethods.delete) && !dataModifier) {
    return null;
  }

  const modifier = dataModifier || stringify;

  return modifier(data);
};

export const requestHeaders = (common, options, withCommonHeaders = true) => ({
  ...(withCommonHeaders && commonHeaders),
  ...(common && common.headers),
  ...(options && options.headers),
});

export const getFullUrl = (baseUrl, url, options) => (
  `${ensureSlash(baseUrl)}${removeSlashFromStart(url)}${getQuery(options)}`
);

export const proceedCatchHandling = err => Promise.reject(err);

export const isCancelError = err => (
  err && err.name === 'AbortError'
);

export const isNetworkError = err => (
  err
  && err instanceof TypeError
  && (
    err.message === 'Failed to fetch'
    || err.message === 'NetworkError when attempting to fetch resource.'
    || err.message === 'Cancelled'
  )
);

export const suppressCancel = reject => err => (
  (isCancelError(err) || isNetworkError(err)) ? undefined : reject(err)
);

export const shouldSuppressAbortError = ({ skipCancel }) => !skipCancel;

export const suppressAbortError = options => (
  shouldSuppressAbortError(options)
    ? suppressCancel(proceedCatchHandling)
    : proceedCatchHandling
);

export const shouldHandleUnauthorized = ({ skipUnauthorized }) => !skipUnauthorized;

export const isUnauthorizedError = err => (
  err.status === 401 || err.code === 401
);

export const redirectUnauthorized = () => {
  if (global.location.pathname.includes('admin')) {
    deleteToken(COOKIE_ADMIN_TOKEN_KEY);
    global.location.href = '/admin/login';
  } else {
    deleteToken(COOKIE_TOKEN_KEY);
    global.location.href = '/login';
  }
};

export const resolveUnauthorized = err => (
  global.location.pathname.includes('login')
    ? Promise.reject(err)
    : redirectUnauthorized()
);

export const handleUnauthorized = reject => err => (
  isUnauthorizedError(err) ? resolveUnauthorized(err) : reject(err)
);

export const unauthorizedHandler = options => (
  shouldHandleUnauthorized(options)
    ? handleUnauthorized(proceedCatchHandling)
    : proceedCatchHandling
);
