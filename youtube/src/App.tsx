import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"



function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[{
        index:true,
        element:<Home/>
      }]
    }
  ])

 return <RouterProvider router={router}/>
}

export default App
