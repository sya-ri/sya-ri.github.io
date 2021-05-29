import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './Pages';
import Index from './components/pages/Index';
import NotFound from './components/pages/NotFound';

const App = (): JSX.Element => (
  <div className="app">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={Pages.index} component={Index} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
