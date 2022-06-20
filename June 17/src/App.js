import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Shop from './Components/Shop'
import Favourite from './Components/Favourite'
import About from './Components/About'
import Contact from './Components/Contact'

const App=()=>
 {
  return (
    <div className="App">
      <div className="header">
          <p>Additional <span style={{color: 'red'}}>20% off </span>Sale items - Please See Details</p>
      </div>

      <div className="menu">
          
        <table>
          <tr>
            <td>
        <div className="menu_image">
        <img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/logo.jpg" height="150px" width="150px"></img>
        </div>
        </td>
  
        <td>
        <div className="menu_options">
        <BrowserRouter>
           <Link to="/home" className="text"><b>HOME</b> </Link>&nbsp; &nbsp; &nbsp; 
           <Link to="/shop" className="text"><b>SHOP</b> </Link>&nbsp; &nbsp; &nbsp; 
           <Link to="/favourite" className="text"><b>FAVOURITE</b> </Link>&nbsp; &nbsp; &nbsp; 
           <Link to="/about" className="text"><b>ABOUT</b> </Link>&nbsp; &nbsp; &nbsp; 
           <Link to="/contact" className="text"><b>CONTACT</b> </Link>&nbsp; &nbsp; &nbsp; 
        </BrowserRouter>
           
        </div>
        </td>
         
        <td>
          <div className="menu_button">
          <button style={{width: '60px', height: '50px'}}>Button</button> &nbsp;&nbsp;&nbsp;
          <button style={{width: '60px', height: '50px'}}>Button</button>
          </div>
        </td>
        </tr>
        
        <tr>
          <td colSpan='3'>
        <BrowserRouter>
        <Routes>
           <Route ex path ="/" component={Home}/>
           <Route path ="/shop" component={Shop}/>
           <Route path ="/favourite" component={Favourite}/>
           <Route path ="/about" component={About}/>
           <Route path ="/contact" color={Contact}/>
        </Routes>
        </BrowserRouter>
        </td>
        </tr>
        </table>
        </div>

      <div className="footer">
  
            <table>
              <tr>
              <td>
            <h1>LET'S KEEP IN TOUCH</h1>
            </td>
            <td>
            <h2>About Us</h2>
          </td>
          <td>
          <div className="">
            <h2>Information</h2>
          </div>
          </td>
          <td>
          <div className="">
            <h2>Custom</h2>
          </div>
         </td>
         </tr>
         <tr></tr>
            <p>Sign up for our e-mail to get latest news.</p>
            <input type= "text" placeholder="Your E-mail Address"/>
            <button>Sign-Up</button>
         </table>
      </div>
    </div>
  );
}

export default App;
