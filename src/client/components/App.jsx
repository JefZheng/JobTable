import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AddApplication from './Dashboard/AddApplication';
import Application from './Dashboard/Application';
import ApplicationsList from './Dashboard/ApplicationsList';
import Graph from './Dashboard/Graph';
import Login from './Dashboard/Login';
import PageNotFound from './PageNotFound';

function App() {
  const [user, setUser] = React.useState(null);
  function login(user = null) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav
        className="navbar has-background-primary-dark has-text-white"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/applications" className="navbar-item has-text-white">
              Applications List
            </Link>

            <Link className="navbar-item has-text-white" to="/graph">
              Graph
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {user ? (
                  <a className="button is-light" onClick={logout}>
                    Logout {user}
                  </a>
                ) : (
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container is-fluid">
        <Switch>
          <Route exact path={['/', '/applications']} component={ApplicationsList} />
          <Route path="/applications/create" render={(props) => <AddApplication {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} login={login} />} />
          <Route path="/graph" render={(props) => <Graph {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
