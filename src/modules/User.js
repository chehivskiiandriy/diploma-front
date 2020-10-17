import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthApp } from '../apps';
import Layout from '../components/Layout';
import AppByType from '../components/AppByType';
import NavByType from '../components/Navigation/NavByType';
import LoaderWrapper from '../components/LoaderWrapper';
import { userRoleSelector, isUserLoadedSelector } from '../store/user/selectors';
import { checkToken } from '../store/user/thunks';

console.log('[USER MODULE] init');

const User = () => {
  const dispatch = useDispatch();
  const userRole = useSelector(userRoleSelector);
  const isUserLoaded = useSelector(isUserLoadedSelector);

  useEffect(() => {
    // todo
    dispatch(checkToken());
  }, []);

  if (!isUserLoaded) {
    return <LoaderWrapper />;
  }

  if (!userRole) {
    return <AuthApp />;
  }

  return (
    <Layout navigation={<NavByType />}>
      <AppByType />
    </Layout>
  );
};

export default User;
