import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";

const MyRoute = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default MyRoute;