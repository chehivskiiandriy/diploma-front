import Cookies from 'js-cookie';

export const COOKIE_TOKEN_KEY = 'jwt.token';
export const COOKIE_ADMIN_TOKEN_KEY = 'jwt.admin.token';
export const TOKEN_HEAD = 'Bearer';

export const setToken = (tokenName, token, options) => {
  Cookies.set(tokenName, token, options);
};

export const getToken = (tokenName, addHead = true, head = TOKEN_HEAD) => new Promise(resolve => {
  const token = Cookies.get(tokenName);

  if (!token) resolve(null);

  if (!addHead) resolve(token);

  resolve(`${head} ${token}`);
});

export const getTokenSync = (tokenName, addHead = true, head = TOKEN_HEAD) => {
  const token = Cookies.get(tokenName);

  if (!token) return null;

  if (!addHead) return token;

  return `${head} ${token}`;
};

export const deleteToken = (tokenName, options) => {
  Cookies.remove(tokenName, options);
};
