import React from "react"
import { Outlet } from "react-router-dom"

export default function Initial(){
	return (
		<>

			<div className="w-full h-screen bg-gray-200 flex justify-center items-center">

				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

					<div className="flex justify-center mb-6">
						<img src="/src/assets/Airevisor_logo.png" alt="Airevisor Logo" className="w-6/12 h-6/12" />
					</div>

					<Outlet/>

				</div>

			</div>


		</>
	)
}