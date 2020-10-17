import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { deleteToken, COOKIE_ADMIN_TOKEN_KEY } from '../../../api/token';
import { setAdminAuth } from '../../../store/auth/actions';
import routes from '../../../routes';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    deleteToken(COOKIE_ADMIN_TOKEN_KEY);
    dispatch(setAdminAuth(false));
    history.replace(routes.admin.login);
  }, []);

  return <div />;
};

export default Logout;
