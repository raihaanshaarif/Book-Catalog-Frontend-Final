import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import BookDetail from "../Pages/BookDetail/BookDetail";

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
    ],
  },
]);
