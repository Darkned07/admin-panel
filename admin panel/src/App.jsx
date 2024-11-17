import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import UserList from "./components/UserList";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const user = true;

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
          path: "/kasal/:id",
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
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
