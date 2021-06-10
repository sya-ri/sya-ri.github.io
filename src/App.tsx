import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './Pages';
import Index from './components/pages/Index';
import NotFound from './components/pages/NotFound';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Links from './components/pages/Links';
import Helmet from './Helemet';

const App = (): JSX.Element => (
  <div className="app">
    <Helmet />
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={Pages.index} component={Index} />
          <Route exact path={Pages.about} component={About} />
          <Route exact path={Pages.works} component={Works} />
          <Route exact path={Pages.links} component={Links} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
