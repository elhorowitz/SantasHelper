import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login/login';
import FamilyWishLIst from './familyWishList/familyWishList';
import PersonalWishLIst from './personalWishList/personalWishList';
import PrivateRoute from './components/privateRoute/privateRoute';
import { isLoggedIn, logIn } from './services/backend';

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { isAuthenticated: false, user: {}, token: '' };
  }

  componentDidMount() {
    isLoggedIn().then((isAuthenticated) => this.setState({ isAuthenticated }));
  }

  render() {
    const authObject = {
      isAuthenticated: this.state.isAuthenticated,
      authenticate: () => logIn(),
    };
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
}

export default App;
