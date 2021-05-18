import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './home/Home';
import Menu from './menu/Menu';
import Photos from './photos/Photos'
import Reserve from './reserve/Reserve'

import './App.css';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/photos' component={Photos} />
        <Route path='/reserve' component={Reserve} />
        <Route path='/*' component={Home} />
    </Switch>
);

export default App;
