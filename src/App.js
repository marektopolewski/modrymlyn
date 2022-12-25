import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './navbar/NavBar';

import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Photos from './pages/photos/Photos';
import PhotoDetails from './pages/photos/PhotoDetails';
import Reservations from './pages/reserve/Reservations';
// import Reserve from './pages/reserve/Reserve';
// import ReserveAdmin from './pages/reserve/ReserveAdmin';
import Arp from './pages/arp/Arp';
// import Christmas from './pages/christmas/Christmas';
// import Valentines from './pages/valentines/Valentines';
// import Ukraine from './pages/ukraine/Ukraine';
// import Easter from './pages/easter/Easter';

import './App.css';

const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/photos' component={Photos} />
            <Route path='/photo/:id' component={PhotoDetails} />
            <Route path='/reservations' component={Reservations} />
            {/* <Route path='/reserve' component={Reserve} /> */}
            {/* <Route path='/reserveAdmin' component={ReserveAdmin} /> */}
            <Route path='/arp' component={Arp} />
            {/* <Route path='/christmas' component={Christmas} /> */}
            {/* <Route path='/valentines' component={Valentines} /> */}
            {/* <Route path='/ukraine' component={Ukraine} /> */}
            {/* <Route path='/easter' component={Easter} /> */}
            <Route path='/*' component={Home} />
        </Switch>
    </Router>
);

export default App;
