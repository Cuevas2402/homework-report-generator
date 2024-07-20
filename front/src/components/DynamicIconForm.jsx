import React, { useState } from "react";

export default function DynamicForm(props) {

	const [data, setData] = useState(

		props.fields.icon.reduce((acc,field) => ({...acc, [field.name] : ''} ), {})

	);

	const handleFormChange = (e) => {
		const {name, value} = e.target
		setData((prev) => ({...prev, [name]:value}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		props.onSubmit(data);
	}

	return (
			<>
				<form action="" className="w-full" onSubmit={handleSubmit}>

					{
						data.map(field => 
							(
								<>

									<div>
										<div className="mb-4 w-full">
											<input type="text" placeholder="Type here" className="input w-full max-w-xs" />
											<label className="input input-bordered flex items-center gap-2">
												<input type="text" className="grow" placeholder="Username" />
											</label>
										</div>
									</div>

								</>	
							)
						)
					}

				</form>

			</>
		)
}