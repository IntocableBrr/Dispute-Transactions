import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props:any) => {

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button value={props.value}
      onClick={props.back ? props.backHandler : props.detailHandler}>{props.back ? "back":"details"}</button>
    </Card>
  );
};
export default ExpenseItem;
