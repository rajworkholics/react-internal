import React from 'react'
import Form from './Form'
import './change.css'

function Change(props)
{
const onSavingData= (newBook)=>
{
   const bookDetails ={
       ...newBook,
       id : Math.random().toString()
   }
   props.onAddBook(bookDetails)
}
    return (
     <div className="new-expense">
         <Form onSave={onSavingData}/>
     </div>
    );
}

export default Change;