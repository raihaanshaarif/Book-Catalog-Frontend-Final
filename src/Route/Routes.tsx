import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import BookDetail from "../Pages/BookDetail/BookDetail";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Books from "../Pages/Books/Books";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "../Components/PrivateRoute";
import EditBook from "../Pages/Books/EditBook";

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
        path: "/editbook/:id",
        element: <EditBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/add-book",
        element: <PrivateRoute element={<AddBook />} />,
      },
    ],
  },
]);
