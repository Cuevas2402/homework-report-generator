import React from "react";
import { HomeIcon } from "../../assets/Svg";
import Stats from "../../components/Stats";

export default function Home(props){
	return (

		<>

			<div className="text-sky-600 flex flex-col w-full h-full">


					<div className="py-3 px-10 w-full flex justify-center items-center h-1/6">

						<Stats></Stats>

					</div>

				<div className="grid grid-cols-2 w-full h-5/6">

					<div className="w-full px-20 py-10">

						<div className="breadcrumbs text-2xl">
							<ul>
								<li>
									<span class="h-18 w-18 material-symbols-outlined"> schedule </span>

									<p className="ml-3">Recent</p>
								</li>
							</ul>
						</div>


					</div>

					<div className="w-full px-20 py-10 ">

						<div className="breadcrumbs text-2xl">
							<ul>
								<li>
										<span class="h-18 w-18 material-symbols-outlined"> pie_chart </span>
										<p className="ml-3">Total</p>
								</li>
							</ul>
						</div>

					</div>

				</div>

			</div>

		</>
	)
}