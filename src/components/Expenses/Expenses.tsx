import React from "react";
import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props:any) => {

  
  const transaction_list: JSX.Element[] = [];
  const tList: JSX.Element[] = [];
  const [back, setBack]= useState(false);
  const [index, setIndex]= useState(0);

  const backHandler =(e:any)=>{
    setBack(false);
    console.log("back");
  }
//maybe put an if here to handle extra stuff for the dispute form 
  tList.push(<div><ExpenseItem
    title={props.items[index].title}
    amount={props.items[index].amount}
    date={props.items[index].date}
    back={back}
    backHandler={backHandler}
  />
  <h3 className="expense-item">ID: {props.items[index].id}</h3>
  <button>dispute</button>
  </div>);

// next step ^^^^^ work on dispute button!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
  for (let i = 0; i < props.itemLenght; i++){

const detailHandler =(e:any)=>{
  console.log(e.target.value);
  setBack(true);
  setIndex(e.target.value);
  
}


    



  transaction_list.push(<div><ExpenseItem
  title={props.items[i].title}
  amount={props.items[i].amount}
  date={props.items[i].date}
  value={i}
  detailHandler={detailHandler}
  
 
/>
</div>);







};






  return (
  <Card className="expenses">

    {back ?  tList: transaction_list}

   </Card>
  
  );
};

export default Expenses;
