import React from 'react'
import Navbar from "./compounents/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import"./index.css";
import Home from "./compounents/Home"
import Dishes from "./compounents/Dishes"
import About from "./compounents/About"
import Menu from "./compounents/Menu"
import Coustmer from "./compounents/Coustmer"
import Order from "./compounents/Order"
import Footer from "./compounents/Footer"
import Error from "./compounents/Error"
import Search from "./compounents/Search"
import {Route} from "react-router-dom";



const App = () => {
  return (
    <>
   
    <Navbar/>

   <Route exact path="/">
   <Home/>
   <Search/>
   <Dishes/>
   <About/>
   <Menu/>
   <Coustmer/>
   <Order/>

   </Route>
    
   
    
<Route exact path="/dishes">
<Dishes/>
</Route>


    
   
   <Route exact path="/about">
   <About/>
   </Route>
  
   
   <Route exact path="/menu">
   <Menu/>
   </Route>

   
   
    {/* <Route exact path="/coustmer">
    <Coustmer/>
    </Route> */}
  

    

  <Route exact path="/order">
  <Order/>
  </Route>
    
  

   
    
  <Footer/>
   
 


    




</>


  )
}

export default App
