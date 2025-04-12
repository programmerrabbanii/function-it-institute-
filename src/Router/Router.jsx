import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Courses from "../Page/Courses";
import AboutUs from "../Page/AboutUs";
import Support from "../Page/Support";
import Contact from "../Page/Contact";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>
            },
            {
               path:"/about",
               element:<AboutUs></AboutUs> 
            },
            {
                path:"/support",
                element:<Support></Support>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
])

export default router