import "./App.css"
import React from "react"
import { Link, Route, withRouter } from "react-router-dom"
import {getToken} from "../utils/api.js"
import Signin from "./Signin"
import Account from  './Account'
import Logout from './Logout'
import ProtectedRoute from "./ProtectedRoute"

function App() {
	// We are going to use this token value to conditionally render the components of account and signIn
	const signedIn = getToken();

	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				
				{!signedIn && <Link to="/signin">Signin</Link>}
				{signedIn && <Link to="/account">My Account</Link>}
				{signedIn && <Link to="/logout">Logout</Link>}
			</nav>

			<Route exact path="/signin" component={Signin} />
			<ProtectedRoute exact path="/account" component={Account} />
			<ProtectedRoute exact path="/logout" component={Logout} />

		</div>
	)
}

export default withRouter(App)
