import React, {useState} from 'react'
import './form.css'

function Form(props)
{
    const [booktitle,setBookTitle] = useState('');
    const [bookauthor,setBookAuthor] = useState('');
    const [bookamount,setBookAmount] = useState('');
    const [bookdate,setBookDate] = useState('');
    const [bookdescription,setBookDescription] = useState('');

    /*const [input,setInput]= useState({
        title : '',
        author : '',
        amount: '',
        date : '',
        description : '',
    });*/

    const Changetitle = (event) =>
    {
        setBookTitle(event.target.value);
        /*setInput({
            ...input,
            title: event.target.value
        })
                 or
        setInput((prevState)=>
        {
            return {
           ...prevState,
           title: event.target.value
            }
        });*/
    }
    const Changeauthor = (event) =>
    {
        setBookAuthor(event.target.value);
        /*setInput({
            ...input,
            author: event.target.value
        })
                  or
        setInput((prevState)=>
        {
            return {
                ...prevState,
                author : event.target.value
            }
        });*/
    }
    const Changeamount = (event) =>
    {
        setBookAmount(event.target.value);
        /*setInput({
            ...input,
            amount: event.target.value
        })
                  or
        setInput((prevState)=>
        {
         return {
             ...prevState,
             amount : event.target.value
         }
        });*/
    }
    const Changedate = (event) =>
    {
        setBookDate(event.target.value);
        /*setInput({
            ...input,
            date: event.target.value
        })
                 or
        setInput((prevState)=>
        {
          return {
              ...prevState,
              date : event.target.value
          }
        });*/
    }
    const Changedescription = (event) =>
    {
       setBookDescription(event.target.value);
       /*setInput({
        ...input,
        description: event.target.value
       })
                  or
        setInput((prevState)=>
        {
            return {
             ...prevState,
             description : event.target.value
            }
        });*/
    }

    const submitForm=(event)=>
    {
      event.preventDefault();

      const bookDetails =
      {
        title: booktitle,
        author: bookauthor,
        amount: bookamount,
        date: new Date(bookdate),
        description: bookdescription
      };

      props.onSave(bookDetails);
      setBookTitle('');
      setBookAuthor('');
      setBookAmount('');
      setBookDate('');
      setBookDescription('');
    }
    return (
        <form onSubmit={submitForm}>
          <div className="new-expense__controls">
            
            <div className="new-expense__controls">
              <lable>Title</lable>
              <input type="text" 
              value={booktitle}
              onChange={Changetitle}/>
            </div>

            <div className="new-expense__controls">
              <lable>Author</lable>
              <input type="text"
              value={bookauthor} 
              onChange={Changeauthor}/>
            </div>

            <div className="new-expense__controls">
              <lable>Amount</lable >
              <input type="number" min="50" max="20000"
              value={bookamount}
              onChange={Changeamount}/>
            </div>

            <div className="new-expense__controls">
              <lable>Date</lable>
              <input type="date" min="2005-01-01" max="2022-6-15"
              value={bookdate}
              onChange={Changedate}/>
            </div>

            <div className="new-expense__controls">
              <lable>Description</lable>
              <input type="text" 
              value={bookdescription}
              onChange={Changedescription}/>
            </div>

            <div className="new-expense__controls">
              <button type="submit">Add Book</button>
            </div>
          </div>
        </form>
    );
}

export default Form;
