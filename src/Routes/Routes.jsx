import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import NotFoundAppPage from '../Pages/NotFoundAppPage/NotFoundAppPage';

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
        loader: async () => {
          const res = await fetch("/allAppsData.json");
          return res.json();
        },
        Component: InstalledApps
      },
      {
        path: "/appDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("/allAppsData.json");
          const data = await res.json();

          const app = data.find(item => item.id === parseInt(params.id));

          if (!app) {
            throw new Response("App Not Found", { status: 404, statusText: "App Not Found", statusTextCustom: "appNotFound" });
          }

          return app;
        },
        Component: AppDetails,
        errorElement: <NotFoundAppPage></NotFoundAppPage>
      }
    ]
  }
])