import React from 'react';
import { useSelector } from 'react-redux';

import { AdminApp } from '../apps';
import Layout from '../components/Layout';
import AdminNav from '../components/Navigation/AdminNav';
import Login from '../apps/admin/containers/Login';
import { isAdminLoggedSelector } from '../store/auth/selectors';

console.log('[ADMIN MODULE] init');

const Admin = () => {
  const isAdminLogged = useSelector(isAdminLoggedSelector);

  if (!isAdminLogged) {
    return <Login />;
  }

  return (
    <Layout navigation={<AdminNav />}>
      <AdminApp />
    </Layout>
  );
};

export default Admin;
