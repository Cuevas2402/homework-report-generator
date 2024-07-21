import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Initial from "./layouts/Initial";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import PDashboard from "./layouts/PDashboard";
import Home from "./views/p/Home";

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Initial/>,
			children : [
				{
					index:true,
					element: <Login/>
				},
				{
					path: '/register',
					element: <Register/>
				}
			]

		},
		{
			path:'/p',
			element: <PDashboard/>,
			children:[
				{
					index:true,
					element:<Home/>
				}

			]
		}
	]
)

export default router;