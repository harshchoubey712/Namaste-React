import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Coding/components/Header";
import Body from "./Coding/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from './Coding/Components/About';
import Contact from "./Coding/Components/Contact";
import Error from "./Coding/Components/Error";
import RestaurantMenu from "./Coding/Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from './Coding/Components/Grocery';

// This is where you are dynamically importing the Grocery component,
// which means it will only be loaded when it's needed
const Grocery = lazy(() => import("./Coding/Components/Grocery"));

const About = lazy(() => import("./Coding/Components/About"));

const AppLayout = () => {
  const [userName, setuserName] = useState();

  // Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };

    setuserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
