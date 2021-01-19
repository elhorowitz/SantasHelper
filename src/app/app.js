import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login/login';
import FamilyWishLIst from './familyWishList/familyWishList';
import PersonalWishLIst from './personalWishList/personalWishList';
import PrivateRoute from './components/privateRoute/privateRoute';
import { isLoggedIn, logIn } from './services/backend';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    isLoggedIn().then((result) => setIsAuthenticated(result.isAuthenticated));
  }, []);

  const authObject = {
    isAuthenticated,
    authenticate: () => logIn(),
  };

  console.log(authObject);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login authentication={authObject} />
        </Route>

        <PrivateRoute authentication={authObject} path="/family">
          <FamilyWishLIst />
        </PrivateRoute>

        <PrivateRoute authentication={authObject} path="/personal">
          <PersonalWishLIst />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
