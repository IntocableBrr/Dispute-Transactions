import React from "react";
import { useNavigate } from "react-router-dom";

const Details =()=>{

    const navigate = useNavigate();

    const transactionDetailHandler = () =>{
        navigate("/transactions/details/dispute")
    }

    return(
        <div onClick={transactionDetailHandler}>Details</div>
    );
}

export default Details; 