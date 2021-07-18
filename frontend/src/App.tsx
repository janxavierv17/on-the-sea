import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreatePlace } from "./pages/CreatePlace";
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-place">
          <CreatePlace />
        </Route>
      </Switch>
    </Router>
  );
};
