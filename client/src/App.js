import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./pages/Login";
import Customer from "./pages/Customer";
import BeneficiaryForm from "./pages/BeneficiaryForm";
import OwnershipForm from "./pages/OwnershipForm";
import About from "./pages/About";
import Quote from "./pages/Quote";
import MotoIns from "./pages/MotoIns";
import AutoIns from "./pages/AutoIns";
import BoatIns from "./pages/BoatIns";
import HomeIns from "./pages/HomeIns";
import LifeIns from "./pages/LifeIns";
import Faqs from "./pages/Faqs"

function App() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} />}
        />
        <Route exact path="/login" render={props => <LoginForm {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/BeneficiaryForm" component={BeneficiaryForm} />
        <Route exact path="/OwnershipForm" component={OwnershipForm} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Quote" component={Quote} />
        <Route exact path="/HomeIns" component={HomeIns} />
        <Route exact path="/AutoIns" component={AutoIns} />
        <Route exact path="/MotoIns" component={MotoIns} />
        <Route exact path="/BoatIns" component={BoatIns} />
        <Route exact path="/LifeIns" component={LifeIns} />
        <Route exact path="/Faqs" component={Faqs} />

      </Switch>
    </Router>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
