import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/auth/Register';
import ProfileForm from './components/dashboard/profile/ProfileForm';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
      	<Switch>
      	  <Route exact path="/register" component={Register} />
          <Route exact path="/profile/form" component={ProfileForm} />
      	</Switch>
      </Fragment>
    </Router>
  );
}

export default App;
