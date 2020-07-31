import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/privateRoute/privateRoute";
import Login from "./login/login";
import FamilyWishLIst from "./familyWishList/familyWishList";
import PersonalWishLIst from "./personalWishList/personalWishList";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login authentication={fakeAuth} />
        </Route>

        <PrivateRoute authentication={fakeAuth} path="/family">
          <FamilyWishLIst />
        </PrivateRoute>

        <PrivateRoute authentication={fakeAuth} path="/personal">
          <PersonalWishLIst />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
