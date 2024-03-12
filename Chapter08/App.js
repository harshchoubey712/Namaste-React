import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Coding/components/Header';
import Body from './Coding/Components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './Coding/Components/About';
import Contact from './Coding/Components/Contact';
import Error from './Coding/Components/Error';
import RestaurantMenu from './Coding/Components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app">
    
      <Header />
      
      <Outlet />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<RouterProvider router = {appRouter} />

)
;
