import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../components/Home";
import Todos from "../components/Todos";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todos",
      element: <Todos />
    }
]);

const Root = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
      );
}

export default Root
