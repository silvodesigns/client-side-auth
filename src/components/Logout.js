import React from  "react";
import {Redirect} from "react-router-dom"

function Logout(props){
    //when this component is rendered remove the token value from localStorage
    //and redirect user to signin component
    localStorage.removeItem("token")
    return <Redirect to="/signin"/>

}

export default Logout