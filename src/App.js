import React from 'react';
import { Route, Routes } from 'react-router';
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
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/menu' element={<Menu/>} />
            <Route exact path='/photos' element={<Photos/>} />
            <Route exact path='/photo/:id' element={<PhotoDetails/>} />
            <Route exact path='/reservations' element={<Reservations/>} />
            {/* <Route exact path='/reserve' element={<Reserve/>} /> */}
            {/* <Route exact path='/reserveAdmin' element={<ReserveAdmin/>} /> */}
            <Route exact path='/arp' element={<Arp/>} />
            {/* <Route exact path='/christmas' element={<Christmas/>} /> */}
            {/* <Route exact path='/valentines' element={<Valentines/>} /> */}
            {/* <Route exact path='/ukraine' element={<Ukraine/>} /> */}
            {/* <Route exact path='/easter' element={<Easter/>} /> */}
            <Route exact path='/*' element={<NotFound/>} />
        </Routes>
    </Router>
);

export default App;
