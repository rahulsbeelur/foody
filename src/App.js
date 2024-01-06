import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import { Error } from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
import EmptyMenu from './components/EmptyMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStores';
import Cart from './components/Cart';

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    const {loggedInUser} = useContext(UserContext);
    const [userName, setUserName] = useState(loggedInUser);

    return (
        <Provider store={appStore}>
            <div className="app">
            <UserContext.Provider value={{"loggedInUser": userName, setUserName}}>
            <Header />
            <ScrollRestoration />
            <Outlet />
            </UserContext.Provider>
        </div>
        </Provider>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Body /> },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/empty-menu',
                element: <EmptyMenu />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
