import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ItemDetail from "./pages/ItemDetail";

const items = [
  {
    id: 1,
    name: "Item 1",
    description: "Item 1 description",
    price: 10
  },
  {
    id: 2,
    name: "Item 2",
    description: "Item 2 description",
    price: 20
  },
  {
    id: 3,
    name: "Item 3",
    description: "Item 3 description",
    price: 30
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/itemdetail/:id",
        element: <ItemDetail items={items}/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);