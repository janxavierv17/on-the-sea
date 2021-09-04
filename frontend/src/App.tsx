import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MultiStepForm } from "./pages/MultiStepForm";
import { Authentication } from "./pages/Authentication";
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Authentication />
        </Route>
        <Route path="/place">
          <MultiStepForm />
        </Route>
      </Switch>
    </Router>
  );
};
