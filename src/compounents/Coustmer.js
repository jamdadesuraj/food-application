import React from 'react'
import c_first from "../images/pic-1.png"
import c_second from "../images/pic-2.png"
import c_third from "../images/pic-3.png"








const Coustmer = () => {
    return (
        <>
            <section className="customer_section">
                <div className="container">
                    <div className="row">
                    <div className="coustmer_info">
                    <h5>customer's review</h5>
                    <h1>what they say</h1>
                    </div>

      



                    <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={c_first} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Food is, of course, a great way to meet people and make friends. When people share a meal, you can be sure the discussions about food, restaurants and recipes are going to be endless..</p>
            </div>
             </div>
            </div>
            </div>
            </div>


            <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
                        <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={c_second} alt=""/>
                    <div className="user-info">
                        <h3>Sophia</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine..</p>
            </div>
             </div>
            </div>
            </div>
            </div>


          
            <div className="col-12 col-md-4 col-lg-4">
                    <div className="review">
                    <div className="swiper-container review-slider">
               <div className="swiper-wrapper"></div>
                    <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={c_third} alt=""/>
                    <div className="user-info">
                        <h3>James</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>If something tastes better than you expected, you could use the word wow to express your surprise. If you say something tastes amazing, you’re saying it tastes even better than great or really good..</p>
            </div>
             </div>
            </div>
            </div>













                  </div>  
                </div>
            </section>
        </>
    )
}

export default Coustmer
