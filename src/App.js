import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './navbar/NavBar';

import NotFound from './pages/notfound/NotFound'
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
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/photo/:id' component={PhotoDetails} />
            <Route exact path='/reservations' component={Reservations} />
            {/* <Route exact path='/reserve' component={Reserve} /> */}
            {/* <Route exact path='/reserveAdmin' component={ReserveAdmin} /> */}
            <Route exact path='/arp' component={Arp} />
            {/* <Route exact path='/christmas' component={Christmas} /> */}
            {/* <Route exact path='/valentines' component={Valentines} /> */}
            {/* <Route exact path='/ukraine' component={Ukraine} /> */}
            {/* <Route exact path='/easter' component={Easter} /> */}
            <Route exact path='/*' component={NotFound} />
        </Switch>
    </Router>
);

export default App;
