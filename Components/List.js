import React, {useState} from 'react';
import Card from './Card'
import Date from './Date';
import './list.css'

const List = (props)=>
{
  const [amount,setAmount] = useState(props.amount)
  console.log("Calculating the discount available")

  const checkDiscount =() =>
  {
    setAmount("Updated!!!")
    console.log(amount)
  }
    return (
    <Card className="expense-item ">
        <Date date = {props.date}/>
        <div className="expense-item__description">
          <h1>{props.title}</h1>
          <h2>by <b>{props.author}</b></h2>
          <h2><i>{props.description}</i></h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={checkDiscount}>Check Discount Price</button>
    </Card>
    );
}

export default List;