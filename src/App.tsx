import React from 'react';
import './App.css';
import { SignupForm } from './components/SignupForm';
import { SignedIn } from './components/SignedIn'

function App() {
  return (
    <div className='container'>
      <SignupForm />
      {/*<SignedIn />*/}
    </div>
  );
}

export default App;
