import { toCamelCaseRecursive } from './utils';
import {
  check,
  toJson,
  commonOptions,
  requestData,
  requestHeaders,
  getFullUrl,
  suppressAbortError,
  unauthorizedHandler,
} from './helpers';
import { requestMethods, AUTHORIZATION } from './constants';
import { getTokenSync, COOKIE_TOKEN_KEY, COOKIE_ADMIN_TOKEN_KEY } from './token';

const headers = {};

const setAuthHeader = token => {
  if (!token) {
    delete headers[AUTHORIZATION];
    return;
  }
  headers[AUTHORIZATION] = token;
};

const getFetchOptions = (
  fullUrl,
  method,
  common,
  data,
  {
    signal, keepalive, dataModifier, ...options
  },
) => ({
  method,
  body: requestData(data, method, dataModifier),
  headers: requestHeaders(common, options),
  ...commonOptions(common),
  signal,
  keepalive,
});

const baseFetchRequest = (baseUrl, method, common = {}) => (
  (url, data, options = {}, dataParser = toJson) => {
    setAuthHeader(getTokenSync(common.authToken));

    const fullUrl = getFullUrl(baseUrl, url, options);
    const fetchOptions = getFetchOptions(fullUrl, method, common, data, options);

    return new Promise((resolve, reject) => {
      fetch(fullUrl, fetchOptions)
        .then(check)
        .then(dataParser)
        .then(toCamelCaseRecursive)
        .then(resolve)
        .catch(suppressAbortError(options))
        .catch(unauthorizedHandler(options))
        .catch(reject);
    });
  }
);

export const connect = (baseUrl, options = {}) => ({
  get: baseFetchRequest(baseUrl, requestMethods.get, options),
  post: baseFetchRequest(baseUrl, requestMethods.post, options),
  put: baseFetchRequest(baseUrl, requestMethods.put, options),
  patch: baseFetchRequest(baseUrl, requestMethods.get, options),
  delete: baseFetchRequest(baseUrl, requestMethods.delete, options),
});

const BASE_URL = 'https://diploma-system-api.herokuapp.com';
// const BASE_URL = 'http://localhost:3000';

const api = connect(BASE_URL, { headers, authToken: COOKIE_TOKEN_KEY });

export const adminApi = connect(BASE_URL, { headers, authToken: COOKIE_ADMIN_TOKEN_KEY });

export default api;
