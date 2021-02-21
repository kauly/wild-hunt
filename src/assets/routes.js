import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ProductsList from "../pages/productsList";
import Product from "../pages/product";

export const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/products",
  },
  {
    path: "/products",
    exact: true,
    component: ProductsList,
  },
  {
    path: "/products/:id",
    component: Product,
    exact: false,
  },
];

const Router = () => (
  <Switch>
    {routes.map((route) =>
      route.redirect ? (
        <Redirect
          from={route.path}
          to={route.redirect}
          exact
          key={route.path}
        />
      ) : (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      )
    )}
  </Switch>
);

export default Router;
