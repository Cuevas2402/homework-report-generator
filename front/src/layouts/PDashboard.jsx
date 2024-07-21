import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";


export default function PDashboard(){

	const fields = [
		{'icon' : 'home', 'text' : 'Home' , 'active' : 1},
		{'icon' : 'rate_review', 'text' : 'Review ' , 'active' : 0},
		{'icon' : 'task', 'text' : 'Tasks' , 'active' : 0},
	]

	return (

		<>

			<div className="w-screen h-screen flex flex-row">

				<div className="w-full h-full basis-2/12 bg-sky-600">

					<NavBar key={1} fields={fields}/>

				</div>

				<div className="w-full h-full basis-10/12 bg-white">

					<Outlet/>


				</div>

			</div>

		</>

	)
}