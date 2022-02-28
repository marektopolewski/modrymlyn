import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './home/Home';
import Menu from './menu/Menu';
import Photos from './photos/Photos';
import Reserve from './reserve/Reserve';
// import Christmas from './christmas/Christmas';
// import Valentines from './valentines/Valentines';
import Ukraine from './ukraine/Ukraine';

import './App.css';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/photos' component={Photos} />
        <Route path='/reserve' component={Reserve} />
        {/* <Route path='/christmas' component={Christmas} /> */}
        {/* <Route path='/valentines' component={Valentines} /> */}
        <Route path='/ukraine' component={Ukraine} />
        <Route path='/*' component={Home} />
    </Switch>
);

export default App;
