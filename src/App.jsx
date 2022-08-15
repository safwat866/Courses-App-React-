import React from "react";
import { Route, Switch } from "react-router-dom";
import AppContextProvider from "./context/appContext";
import Dashboard from "./containers/dashboard";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <AppContextProvider>
      <Switch>
        <Route path="/dashboard">
          <Dashboard title="Forsa | Dashboard"/>
        </Route>
        <Route path="*">
          <AppLayout />
        </Route>
      </Switch>
    </AppContextProvider>
  );
};

export default App;
