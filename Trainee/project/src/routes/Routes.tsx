import React from "react";
import { Links } from "@core/enums";
import { Routes as RoutesList, Route } from "react-router-dom";
import { Home, Products, About, Contacts } from "@pages/index";
import { Header, Footer } from "@components/index";

const Routes = () => {
  return (
    <RoutesList>
      <Route
        path={Links.Home}
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path={Links.Products}
        element={
          <>
            <Products />
          </>
        }
      />
      <Route
        path={Links.About}
        element={
          <>
            <About />
          </>
        }
      />
      <Route
        path={Links.Contacts}
        element={
          <>
            <Contacts />
          </>
        }
      />
      {/*<Route path="*" />*/}
    </RoutesList>
  );
};

export default Routes;
