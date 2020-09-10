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
import AutoIns from "./pages/AutoIns";
import HomeIns from "./pages/HomeIns";
import LifeIns from "./pages/LifeIns";
import Faqs from "./pages/Faqs"

// Even though this is the App.js file, in the end we are not exactly exporting
// the App component.  We actually set up the app component to implement our react
// router, but in the end we export App wrapped in the context provider

function App() {
  // Here we subscribe the authentication context using the useContext hook
  // we use isAuth to determine whether the user is logged in, and setIsAuth
  // to change their status on logout.
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // the props that were not destructured. 
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
        <Route exact path="/LifeIns" component={LifeIns} />
        <Route exact path="/Faqs" component={Faqs} />

      </Switch>
    </Router>
  );
}

// Here we export the final product of our app/context configuration, and
// even though it is unnamed here, it will be imported as App in index.js
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
