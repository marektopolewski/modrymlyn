import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './home/Home';
import Menu from './menu/Menu';
import Photos from './photos/Photos';
import PhotoDetails from './photos/PhotoDetails';
import Reservations from './reserve/Reservations';
// import Reserve from './reserve/Reserve';
// import ReserveAdmin from './reserve/ReserveAdmin';
import Arp from './arp/Arp';
import Christmas from './christmas/Christmas';
// import Valentines from './valentines/Valentines';
// import Ukraine from './ukraine/Ukraine';
// import Easter from './easter/Easter';

import './App.css';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/photos' component={Photos} />
        <Route path='/photo/:id' component={PhotoDetails} />
        <Route path='/reservations' component={Reservations} />
        {/* <Route path='/reserve' component={Reserve} /> */}
        {/* <Route path='/reserveAdmin' component={ReserveAdmin} /> */}
        <Route path='/arp' component={Arp} />
        <Route path='/christmas' component={Christmas} />
        {/* <Route path='/valentines' component={Valentines} /> */}
        {/* <Route path='/ukraine' component={Ukraine} /> */}
        {/* <Route path='/easter' component={Easter} /> */}
        <Route path='/*' component={Home} />
    </Switch>
);

export default App;
