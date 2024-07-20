import React from "react"
import { UserIcon, EmailIcon, PasswordIcon } from "../../assets/Svg"
import { createRef } from "react"

export default function Register(){

	const emailRef = createRef()
	const usernameRef = createRef()
	const passwordRef = createRef()

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (

		<>
			<div className="w-full h-5 mb- mb-10 flex justify-center items-center">
				<h1 className="text-2xl text-gray-950 ">Register</h1>
			</div>

			<form onSubmit={handleSubmit}>

				<div>
					<div className="mb-4 w-full">
						<label class="input input-bordered flex items-center gap-2">
							<EmailIcon></EmailIcon>
  							<input type="text" class="grow" placeholder="Email" ref={emailRef}/>
						</label>
					</div>
				</div>

				<div>
					<div className="mb-4 w-full">
						<label className="input input-bordered flex items-center gap-2">
							<UserIcon></UserIcon>
							<input type="text" className="grow" placeholder="Username" ref={usernameRef} />
							
						</label>
					</div>
				</div>

				<div className="mb-6 w-full">
					<label className="input input-bordered flex items-center gap-2 ">
						<PasswordIcon/>
						<input type="password" className="grow" value="password" ref={passwordRef}/>
					</label>

				</div>

				<div className="flex w-full justify-center items-center">
					<button className="btn btn-wide btn-info text-white">Send</button>
				</div>

			</form>
		</>
	)
}