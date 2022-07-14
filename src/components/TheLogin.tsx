import React from "react";
import { useNavigate } from "react-router-dom";
const TheLogin=()=> {

    const navigate = useNavigate();

    const loginHandler = () =>{

navigate("/transactions")

    }
    return(
        <div>
            <input placeholder="username"></input>
            <input placeholder="password" type="password"></input>
            <button onClick={loginHandler}>Login</button>
        </div>
        
    );
    };

    export default TheLogin;