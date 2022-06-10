import './home.css';
import React from 'react'
import List from './List';
import Card from './Card'

function home(props) {
 
return ( 
  <Card className="expenses">
    <List
     date = {props.library[0].date}
     title = {props.library[0].title}
     author = {props.library[0].author}
     amount = {props.library[0].amount}
     description = {props.library[0].description}
    />
    <List
     date = {props.library[1].date}
     title = {props.library[1].title}
     author = {props.library[1].author}
     amount = {props.library[1].amount}
     description = {props.library[1].description}
    />
    <List
     date = {props.library[2].date}
     title = {props.library[2].title}
     author = {props.library[2].author}
     amount = {props.library[2].amount}
     description = {props.library[2].description}
    />
  </Card>
);
}

export default home;