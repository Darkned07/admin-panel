import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import UserList from "./components/UserList";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [user, setUsers] = useState(null);
  const us = JSON.parse(localStorage.getItem("user"));
  console.log(us);
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
          <RootLayout />
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/patient/:id",
          element: <UserList />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
      ],
    },
    {
      path: "login",
      element: us ? <Navigate to={"/"} /> : <Login setUsers={setUsers} />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
