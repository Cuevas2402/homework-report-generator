import React from "react";

export default function NavBar(props){

	return (

		<>

			<div className="text-white text-xl px-8 mt-5 grid grid-cols-1 w-full">
			
				<div className="col-start-1 mt-3  mb-20 w-full h-20">

					<div className="flex flex-col justify-center items-center">

						<div className="avatar online placeholder mb-2 ">
							<div className="bg-white text-sky-600 w-24 rounded-full">
								<span className="text-3xl">D</span>
							</div>
						</div>

						<div className="mx-3 mt-1.5">

							<h1 className="text-3xl">

								User

							</h1>
							
						</div>

					</div>
				</div>

				<div className="w-full col-start-1 my-5">

					<ul>
						{
							props.fields.map( field => (
									<>

										<li className="my-3 w-full">

											<div className="flex">

												<button className=
													{
														`text-left btn 
														${field.active? ' bg-white text-sky-600 border-white' : ' btn-ghost '}
														${field.active? " hover:bg-sky-600 hover:border-none" : " hover:bg-white "}
														${field.active? " hover:text-white" : " hover:text-sky-600 "}
														btn-wide`
													}
												>
													<span class="material-symbols-outlined">{field.icon}</span>
													<span className="mt-1">{field.text}</span>
												</button>

											</div>

										</li>
									
									</>
								)
							)

						}


					</ul>
				</div>



			</div>

		</>
	)
}