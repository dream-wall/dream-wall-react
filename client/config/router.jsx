import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import Dream from '../views/dream/dream';
import Download from '../views/download/download';
import Signup from '../views/signup/signup';
import Signin from '../views/signin/signin';

export default () => [
  <Route path="/" render={() => <Redirect to="/dream" />} exact key="index" />,
  <Route path="/dream" component={Dream} key="dream" />,
  <Route path="/download" component={Download} key="download" />,
  <Route path="/signup" component={Signup} key="signup" />,
  <Route path="/signin" component={Signin} key="signin" />,
];
