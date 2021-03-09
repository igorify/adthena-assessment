import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import ModalsDemo from '@components/modals-demo/ModalsDemo';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="/"
        exact
        component={TaskOne}
      />
      <Route
        path="/task-two"
        component={TaskTwo}
      />
      <Route
        path="/modals-demo"
        component={ModalsDemo}
      />
    </Switch>
  </Router>
);

export default App;
