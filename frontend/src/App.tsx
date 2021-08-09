import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MultiStepForm } from "./pages/MultiStepForm";
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/place">
          <MultiStepForm />
        </Route>
      </Switch>
    </Router>
  );
};
