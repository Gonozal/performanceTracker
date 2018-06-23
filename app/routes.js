/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/StatisticsPage';
import MatchEntryPage from './containers/MatchEntryPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/matchEntry" component={MatchEntryPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
