import React, { useState } from "react"
import api from '../utils/api.js';

function Signin(props) {

	const [error, setError] = useState()
	const [data, setData] = useState({
		email: "",
		password: "",
	})
	
	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name] : event.target.value
		})
	}

	const handleSubmit = (event) => {
		//send datat to our endpoint
		event.preventDefault()

		api().post("/signin", data)
		.then(result => {
			console.log(result.data)
			localStorage.setItem("token", result.data.token)//save data on local storage so is gonna persist
			props.history.push("/account")
		})
		.catch(err => {
			setError(err.response.data.message)
		})

	}

	return (
		<form  onSubmit={handleSubmit}>
			{//if there is an error in the state render this div
			}
			{error && <div className="error">{error}</div>}

			<input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
			<button type="submit">Sign In</button>
		</form>
	)
}

export default Signin