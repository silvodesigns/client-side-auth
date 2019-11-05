import React from 'react';
import {Route , Redirect} from 'react-router-dom'

function ProtectedRoute(props){
    //take this props and desconstruct
    // everything from props expcet the component
    
    const { component: Component, ...rest} = props
    return(
        <Route {...rest} render = { (renderProps)=> {
            if(localStorage.getItem("token")){
                return <Component {...renderProps} />
            } else {
                return <Redirect to="/signin"/>
            }

        }}/>

    )
}

export default ProtectedRoute