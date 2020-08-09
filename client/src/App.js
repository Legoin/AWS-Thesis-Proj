import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Landing from './components/landing/landing';
import Map from './components/mainMap/map';
import Provider from './components/provider/provider';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/map' component={Map} />
          <Route path='/provider' component={Provider} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
