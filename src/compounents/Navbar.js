import React from 'react'
import {Link} from "react-router-dom"



const Navbar = () => {
    return (
        <>
           

           <section className="navbar_section">
               <div className="container-fluid">
                   <div className="row">


                   <nav className="navbar navbar-expand-lg navbar_logo">
  <Link className="navbar-brand logo" to="#"><i className="fas fa-utensils fas_icon"></i>Resto</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navbar_button" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dishes">Dishes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/menu">Menu</Link>
      </li>
      {/* <li className="nav-item">
        <Link class="nav-link" to="/review">Review</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/order">Order</Link>
      </li>

      <div className="icons">
       
        <Link to="#" className="fas fa-search" id="search-icon"></Link>
        <Link to="#" className="fas fa-heart"></Link>
        <Link to="#" className="fas fa-shopping-cart"></Link>
    </div>
    </ul>
  
  </div>
</nav>

                   </div>
               </div>
           </section>





        </>
    )
}


export default Navbar
