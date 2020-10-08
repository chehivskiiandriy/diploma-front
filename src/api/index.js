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
import { setToken, getTokenSync, COOKIE_TOKEN_KEY } from './token';

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
    setAuthHeader(getTokenSync(COOKIE_TOKEN_KEY));

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

// todo temp
setToken(COOKIE_TOKEN_KEY, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lMTJAdGVzdC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNjAxNTgwMzYxLCJleHAiOjE2MDE2NjY3NjF9.RR7tzgEFoJyaPdaPnu_zPWxmCdRIJxM2nAtwQuPd0Ek', { expires: 1 });

setAuthHeader(getTokenSync(COOKIE_TOKEN_KEY));

const api = connect('http://localhost:3000', { headers });

// const adminApi = connect('http://localhost:3000', { headers });

export default api;
