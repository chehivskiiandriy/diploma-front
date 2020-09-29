import React from 'react';
import { Link } from 'react-router-dom';

import { AdminApp } from '../apps';
import Layout from '../components/Layout';
import AdminNav from '../components/Navigation/AdminNav';
import routes from '../routes';

console.log('[ADMIN MODULE] init');

const isAdminLogged = true;

const Admin = () => {
  if (!isAdminLogged) {
    return <div>Login</div>;
  }

  return (
    <Layout navigation={<AdminNav />}>
      Admin
      <Link to={routes.home}>Profile</Link>
      <AdminApp />
    </Layout>
  );
};

export default Admin;
