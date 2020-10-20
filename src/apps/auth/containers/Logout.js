import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { deleteToken, COOKIE_TOKEN_KEY } from '../../../api/token';
import { resetUser } from '../../../store/user/actions';
import routes from '../../../routes';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    deleteToken(COOKIE_TOKEN_KEY);
    dispatch(resetUser());
    history.replace(routes.login);
  }, []);

  return <div />;
};

export default Logout;
