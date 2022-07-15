//import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useNavigate } from "react-router-dom";

const ExpenseItem = (props:any) => {

  const navigate = useNavigate();

    const transactionHandler = () =>{
        navigate("/transactions/details")
    }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div onClick={transactionHandler} className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
  
    </Card>
  );
};
export default ExpenseItem;

/*<button onClick={clickHandler}>Change Title</button>



  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };


*/
