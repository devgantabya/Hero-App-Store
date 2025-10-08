import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
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
          const res = await fetch("/trendingAppsData.json");
          return res.json();
        },
        path: "/",
        Component: Home
      },
      {
        path: "/all-apps",
        Component: ListedBooks
      },
      {
        path: "/installed-apps",
        Component: PagesToRead
      },
      {
        path: "/appDetails/:id",
        loader: async () => {
          const res = await fetch("/trendingAppsData.json");
          return res.json();
        },
        Component: AppDetails
      }
    ]
  }
])