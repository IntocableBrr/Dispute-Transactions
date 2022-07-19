import React from "react";
import { useNavigate } from "react-router-dom";
import Expenses from "../components/Expenses/Expenses";
import TransactionsList from "./TransactionsList";
const Details =(props:any)=>{

    const navigate = useNavigate();

    const transactionDetailHandler = () =>{
        navigate("/transactions/details/dispute")
    }


    return(
        <div>
        <div onClick={transactionDetailHandler}>Details</div>
        </div>
    );
}

export default Details; 