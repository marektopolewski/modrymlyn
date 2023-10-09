import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './navbar/NavBar';

import NotFound from './pages/notfound/NotFound'
import Home from './pages/home/Home';
import { default as MenuLegacy } from './pages/menu_legacy/Menu';
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
        <Suspense fallback="loading">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/menu_new' element={<Menu/>} />
                <Route path='/menu/:langVersion?' element={<MenuLegacy/>} />
                <Route path='/photos' element={<Photos/>} />
                <Route path='/photo/:id' element={<PhotoDetails/>} />
                <Route path='/reservations' element={<Reservations/>} />
                {/* <Route path='/reserve' element={<Reserve/>} /> */}
                {/* <Route path='/reserveAdmin' element={<ReserveAdmin/>} /> */}
                <Route path='/arp' element={<Arp/>} />
                {/* <Route path='/christmas' element={<Christmas/>} /> */}
                {/* <Route path='/valentines' element={<Valentines/>} /> */}
                {/* <Route path='/ukraine' element={<Ukraine/>} /> */}
                {/* <Route path='/easter' element={<Easter/>} /> */}
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </Suspense>
    </Router>
);

export default App;
