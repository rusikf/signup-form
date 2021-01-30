import React from 'react';
import './App.css';
import { SignupForm } from './components/SignupForm';
import { SignedIn } from './components/SignedIn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path='/signed-in'><SignedIn /></Route>
          <Route path='/'><SignupForm /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
