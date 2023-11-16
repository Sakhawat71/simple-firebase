import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/LogIn/Login";

const MyRoute = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blogs",
                element: <div>Blogs</div>
            }
        ]
    }
])

export default MyRoute;