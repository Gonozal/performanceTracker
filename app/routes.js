/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MatchEntryPage from './containers/MatchEntryPage';
import SettingsPage   from './containers/SettingsPage';
import StatisticsPage from './containers/StatisticsPage';


export default () => (
  <App>
    <Switch>
      <Route path="/matchEntry" component={MatchEntryPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/" component={StatisticsPage} />
    </Switch>
  </App>
);
