import { Suspense, createRef } from 'react';
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import {  CSSTransition, SwitchTransition } from "react-transition-group";

import Navbar from './navbar/NavBar';

import Home from './pages/home/Home';
import { default as MenuLegacy } from './pages/menu_legacy/Menu';
import Menu from './pages/menu/Menu';
import Photos from './pages/photos/Photos';
import PhotoDetails from './pages/photos/PhotoDetails';
import Services from './pages/services/Services';
import Order from './pages/order/Order';
import OrderCheckout from 'pages/order/OrderCheckout';
import OrderSuccess from 'pages/order/OrderSuccess';
import Arp from './pages/arp/Arp';
import NewYear from './pages/newyear/NewYear';
import Christmas from './pages/christmas/Christmas';
import Valentines from './pages/valentines/Valentines';
import Ukraine from './pages/ukraine/Ukraine';
import Easter from './pages/easter/Easter';
import Rules from 'pages/rules/Rules';
import NotFound from './pages/notfound/NotFound'

import './App.css';


const ROUTES = [
    { path: '/', element: <Home/>, nodeRef: createRef() },

    { path: '/menu/:langVersion?', element: <MenuLegacy/>, nodeRef: createRef() },
    { path: '/menu_new', element: <Menu/>, nodeRef: createRef(), disabled: true },

    { path: '/photos', element: <Photos/>, nodeRef: createRef() },
    { path: '/photo/:id', element: <PhotoDetails/>, nodeRef: createRef() },

    { path: '/services', element: <Services/>, nodeRef: createRef() },
    { path: '/catering', element: <Order/>, nodeRef: createRef() },
    { path: '/catering-checkout', element: <OrderCheckout/>, nodeRef: createRef() },
    { path: '/catering-success', element: <OrderSuccess/>, nodeRef: createRef() },

    { path: '/arp', element: <Arp/>, nodeRef: createRef() },

    { path: '/newyear', element: <NewYear/>, nodeRef: createRef(), disabled: true },
    { path: '/christmas', element: <Christmas/>, nodeRef: createRef(), disabled: true },
    { path: '/valentines', element: <Valentines/>, nodeRef: createRef(), disabled: true },
    { path: '/ukraine', element: <Ukraine/>, nodeRef: createRef(), disabled: true },
    { path: '/easter', element: <Easter/>, nodeRef: createRef(), disabled: false },

    { path: '/regulamin', element: <Rules/>, nodeRef: createRef(), },

    { path: '*', element: <NotFound/>, nodeRef: createRef() },
];


const AnimatedRoutes = () => {
    const location = useLocation();
    const currentOutlet = useOutlet()
    const { nodeRef } = ROUTES.find(route => route.path === location.pathname) ?? {}
    return (
        <>
        <Navbar/>
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={200}
                classNames="anim-page"
                unmountOnExit
            >
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            </CSSTransition>
        </SwitchTransition>
        </>
    );
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <AnimatedRoutes/>,
        children: ROUTES.filter(route =>!route.disabled).map(route => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    }
]);


const App = () => (
    <RouterProvider router={router}>
        <Suspense fallback="">
            <AnimatedRoutes/>
        </Suspense>
    </RouterProvider>
);

export default App;
