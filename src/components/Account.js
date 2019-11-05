import React,  { useState , useEffect} from "react";
import api from '../utils/api.js';

function Account(props){
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    useEffect(()=>{
        api().get("/me")
        .then(result => {
            setUser({
                name: result.data.name,
                email: result.data.email,
            })

        })
        .catch( error => {
            console.log(error)
        })

    }, [])
    
    return(
        <>
            <h1>My Account</h1>
            <div className="account-row"> name: {user.name}</div>
            <div className="account-row"> email: {user.email}</div>
        </>

    )
}


export default Account