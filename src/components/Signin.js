import React, { useState } from "react"

function Signin(props) {

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

	return (
		<form>
			<input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

			<button type="submit">Sign In</button>
		</form>
	)
}

export default Signin