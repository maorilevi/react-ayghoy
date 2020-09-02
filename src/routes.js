import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AccountView from './views/account/AccountView';
import DashboardView from './views/dashboard';
import SingleRowIndex from "./views/singleRow/SingleRowIndex";

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'feature', element: <AccountView />},
      { path: 'details', element: <SingleRowIndex />},
      { path: 'dashboard', element: <DashboardView />},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
