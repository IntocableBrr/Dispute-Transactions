import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionsList =()=>{

    const navigate = useNavigate();

    const transactionHandler = () =>{
        navigate("/transactions/details")
    }
    return (
        <div onClick={transactionHandler}>Transactions List</div>
    );
};

export default TransactionsList;