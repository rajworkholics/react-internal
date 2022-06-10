import Home from './Components/Home'
import React from 'react'
import Change from './Components/Change'

function App() {

  const book =[
    {
     date: new  Date(2006, 11, 19),
     title: "The Secret", 
     author: "Rhonda Byrne", 
     amount: 255.00, 
     description : "The Secret is a 2006 self-help book by Rhonda Byrne, based on the belief of the pseudoscientific law of attraction",
    },
    {
      date: new  Date(1997, 6, 26),
      title: "Harry Potter and the Philosopher's Stone", 
      author: "J.K. Rowling", 
      amount: 157.00, 
      description : "The first fantasy novel in the Harry Potter series,it follows Harry Potter, a young wizard.",
    },
    {
      date: new  Date(2012, 8, 22),
      title: "The Krishna Key", 
      author: "Ashwin Sanghi", 
      amount: 350.00, 
      description : "The Krishna Key is a 2012 anthropological thriller by Indian author Ashwin Sanghi and is his third novel.",
    },
  ];

  const addBook = book =>
  {
    console.log("Updating Book list...")
    console.log(book);
  }

  return (
    <div>
      <h1>E-Library</h1>
      <h4>You can choose from a range of fictional and non-fictional books</h4>
      <Change onAddBook = {addBook}/>
      <Home library={book}/>
    </div>
  );
}

export default App;
