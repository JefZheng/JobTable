import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import WelcomePageContainer from './WelcomePage/WelcomePageContainer';
import DashboardContainer from './Dashboard/DashboardContainer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <WelcomePageContainer />} />
          <Route path="/dashboard" render={() => <DashboardContainer />} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
