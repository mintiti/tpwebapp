import React from 'react';
import Home from './views/home'
import { User } from './models'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useParams
// } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Home onUpdateUser={(user: User) => {}} appName="TCHIT-TCHAT" channels={[]} />
    </div>
  );
}

export default App;
