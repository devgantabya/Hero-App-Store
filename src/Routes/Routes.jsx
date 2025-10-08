import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/allAppsData.json");
          return res.json();
        },
        path: "/",
        Component: Home
      },
      {
        path: "/all-apps",
        loader: async () => {
          const res = await fetch("/allAppsData.json");
          return res.json();
        },
        Component: AllApps
      },
      {
        path: "/installed-apps",
        Component: InstalledApps
      },
      {
        path: "/appDetails/:id",
        loader: async () => {
          const res = await fetch("/allAppsData.json");
          return res.json();
        },
        Component: AppDetails
      }
    ]
  }
])