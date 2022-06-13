import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Shop from './Components/Shop'
import Favourite from './Components/Favourite'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div class="">
      <div class="">
          <p>Additional 20% off Sale items - Please See Details</p>
      </div>

      <div class="">
        <img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/logo.jpg" width="150px" height="150px"></img>
           
      <div>
        <BrowserRouter>
           <Link to="/home"><b>Home</b> </Link>&nbsp; &nbsp;
           <Link to="/shop"><b>Shop</b> </Link>&nbsp; &nbsp;
           <Link to="/favourite"><b>Favourite</b> </Link>&nbsp; &nbsp;
           <Link to="/about"><b>About</b> </Link>&nbsp; &nbsp;
           <Link to="/contact"><b>Contact</b> </Link>&nbsp; &nbsp;

         <Routes>
           <Route path ="/" element={<Home/>}></Route>
           <Route path ="/" element={<Shop/>}></Route>
           <Route path ="/" element={<Favourite/>}></Route>
           <Route path ="/" element={<About/>}></Route>
           <Route path ="/" element={<Contact/>}></Route>
           </Routes>
          </BrowserRouter>
        </div>
        </div>

        <div class="">
         <img src="" height="" width=""/>
        </div>

        <div class="">
          <div class="">
            <h1>Let's Keep in Touch</h1>
            <input type= "text" placeholder="Your E-mail Address"/>
          </div>

          <div class="">
            <h2>About Us</h2>
          </div>

          <div class="">
            <h2>Information</h2>
          </div>

          <div class="">
            <h2>Custom</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
