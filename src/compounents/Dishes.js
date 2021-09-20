import React from 'react'
import dish_first from "../images/dish-1.png"
import dish_second from "../images/dish-2.png"
import dish_third from "../images/dish-3.png"
import dish_fourth from "../images/dish-4.png"
import dish_fifth from "../images/dish-5.png"
import dish_six from "../images/dish-6.png"



const Dishes = () => {
    return (
        <>
            <section className="dish_section">

                <div className="container dish_container">
                <div className="row">
                <h3 className="dish_head text-center pt-5">Our Dishes</h3>
                <h1 className="dish_heading text-center ">POPULAR DISHES</h1>

                <hr></hr>
                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_first} alt="Card image cap" classNameName="img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Le Pigeon Burgerr</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 12.99<span> <a href="#" className=" dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>

                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_second} alt="Card image cap" classNameName="img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Boneless Strips</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 11.09<span> <a href="#" className=" dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_third} alt="Card image cap" className="img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Fried Chicken</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 25.00<span> <a href="#" className=" dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>



                
                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_fourth} alt="Card image cap" className="img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Veg Extravaganza</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 14.99<span> <a href="#" className=" dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_fifth} alt="Card image cap" className="img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Brownie Sundae</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 15.99<span> <a href="#" className="dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4 gy-5 grow">
                <div className="card dish_img" >
                <img className="card-img-top" src={dish_six} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    <h5 className="card-title dish_title">Tasty Food</h5>
                    <h3 className="dish_name">Hot ‘N’ Crispy</h3>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i>
                <p className="dish_prize">$ 17.90<span> <a href="#" className=" dish_btn">Add To Cart</a></span></p>
             
                </div>
                </div>
                </div>

               
               
                </div>
                </div>
            </section>
        </>
    )
}

export default Dishes

