import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import BookDetail from "../Pages/BookDetail/BookDetail";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookdetail/:id",
        element: <BookDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
      
    ],
  },
]);
