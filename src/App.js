import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Authbar from './components/authBar'
import Navbar from './components/Navbar'
import TestBar from './components/test'
import Dashboard from '../src/layout/dashboard'
// import '../src/materialize/materialize.css'

import './auth.css'
class App extends Component {

    render(){
  return (
    <Router>
        <div className='app'>
            <Authbar/>
            <Navbar />
            {/* <TestBar/> */}
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </div>
    </Router>
  );
    }
}

export default App;
