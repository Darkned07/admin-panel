import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Bemorlar from "./pages/Bemorlar";
import Patient from "./components/Patient";
import Qabul from "./pages/Qabul";
import Maqsad from "./pages/Maqsad";

function App() {
  const [user, setUsers] = useState(JSON.parse(localStorage.getItem("user")));

  console.log(user);

  const route = createBrowserRouter([
    {
      path: "/",

      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/patient/:id",
          element: <Patient />,
        },
        {
          path: "/patient/:edit/:id",
          element: <Patient />,
        },
        {
          path: "bemorlar",
          element: <Bemorlar />,
        },
        {
          path: "qabul",
          element: <Qabul />,
        },
        {
          path: "maqsad",
          element: <Maqsad />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to={"/"} /> : <Login setUsers={setUsers} />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
