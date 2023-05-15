// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


const Router =  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    }
])
export default Router;