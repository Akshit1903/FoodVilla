import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Instamart from "./components/Instamart";
// import Profile from "./components/Profile";
// import About from "./components/About";
// Lazy imports
const Instamart = lazy(() => import("./components/Instamart"));
const Profile = lazy(() => import("./components/Profile"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshit",
    email: "akshit.lalit@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {<Outlet />}
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "/about/profile",
            element: (
              <Suspense>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurants/:restID",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
