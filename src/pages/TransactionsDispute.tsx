import React from "react";
import { useNavigate } from "react-router-dom";

const Dispute=()=>{

    const navigate = useNavigate();

    const disputeHandler = () =>{
        navigate("/transactions/details/dispute/form")
    }

    return(
        <div onClick={disputeHandler}>dispute</div>
    );
}

export default Dispute;