import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MultiStepForm } from "./pages/MultiStepForm";
import { Register } from "./pages/Register";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { ActivateAccount } from "./pages/ActivateAccount";
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/place" component={MultiStepForm} />
        <Route
          path="/authenticate/activate/:token"
          component={ActivateAccount}
        />
      </Switch>
    </Router>
  );
};
