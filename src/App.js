import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './home/Home';
import Menu from './menu/Menu';

import './App.css';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
        {/* <Route path='/photo' component={Photo}/> */}
    </Switch>
);

export default App;
