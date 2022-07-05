import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Links from './Components/Links'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import Buttons from './Components/buttons'

import Home from './Components/Menu-options/Home' 
import Shop from './Components/Menu-options/Shop'
import Favourite from './Components/Menu-options/Favourite'
import About from './Components/Menu-options/About'
import Contact from './Components/Menu-options/Contact'

const App = () =>
{
  return (
     <div>
       <Header/>
        <table>
          <tr>
         <td> <Logo/> </td>
         <td> <Links/></td>
         <td> <Buttons/></td>
          </tr>
        </table>

        <Switch>
          
           <Route  path="/home">
            <Home/>
           </Route>
           <Route  path="/shop">
            <Shop/>
           </Route>
           <Route  path="/favourite">
            <Favourite/>
           </Route>
           <Route  path="/about">
            <About/>
           </Route>
           <Route  path="/contact">
            <Contact/>
           </Route>
        </Switch>
       <Footer/>
    </div>
  )
}

export default App;
