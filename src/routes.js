import React from "react";
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/login",
    component: Login
  }
];

export const RouteWithSubRoutes = route => (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );