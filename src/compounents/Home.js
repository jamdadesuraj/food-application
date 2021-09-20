import React from 'react'
import home_img_second from "../images/home-img-2.png"
import home_img_first from "../images/home-img-1.png"
import home_img_third from "../images/home-img-3.png"



const Home = () => {
    return (
        <>
            <section>
                <div className="container-fluid home_container">
                    <div className="row">


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

    <div className="container-fluid ">
    <div className="row">
    <div className="col-12 col-md-6 col-lg-6">
        <img className="d-block w-100" src={home_img_second} alt="First slide" className="img-fluid"/>
    </div>
    <div className="col-12 col-md-6 col-lg-6 home_items">
        <h5 className="home_head">our special dish</h5>
        <h1 className="home_heading">fried chicken</h1>
        <p className="home_para">Everyone loves fried chicken, Don't ever make it. Ever. Buy it from a place that makes good fried chicken.My favorite meal has always been fried chicken.
Read more at https://www.brainyquote.com/topics/fried-chicken-quotes
Read more at https://www.brainyanihouse.com/fried-chicken</p>


        <button type="button" className="btn_order_first" >Order Now</button>


    </div>

</div>
</div>
</div>


    <div className="carousel-item">
    <div className="container-fluid">
    <div className="row home_img">
    <div className="col-12 col-md-6 col-lg-6">
        <img class="d-block w-100" src={home_img_first} alt="First slide" className="img-fluid"/>
    </div>
    <div className="col-12 col-md-6 col-lg-6 home_items">
        <h5 className="home_head">our special dish</h5>
        <h1 className="home_heading">spicy noodles</h1>
        <p className="home_para">I love Chinese food, like steamed dim sum, and I can have noodles morning, noon and night, hot or cold. I like food that's very simple on the digestive system - I tend to keep it light. I love Japanese food too - sushi, sashimi and miso soup.
Read more at https://www.brainyquote.com/search_results?x=19&y=7&q=noodles</p>

        <button type="button" className="btn_order_first">Order Now</button>



    </div>

</div>
</div>
</div>
    {/* </div> */}


    <div className="carousel-item">
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 col-md-6 col-lg-6">
        <img className="d-block w-100" src={home_img_third} alt="First slide" className="img-fluid"/>
    </div>
    <div className="col-12 col-md-6 col-lg-6 home_items">
        <h5 className="home_head">our special dish</h5>
        <h1 className="home_heading">Hot pizza</h1>
        <p className="home_para">If you want to eat pizza, have the pizza. If you want to run 5 miles up a hill, cool, go run. Do whatever you want to do, but don't let the size of your body and other people's opinions about you stop you from living the life you deserve.
Read more at https://www.brainyquote.com/search_results?x=0&y=0&q=+pizza</p>

        <button type="button" className="btn_order_first" >Order Now</button>

  

    </div>

</div>
</div>
</div>
    {/* </div> */}



  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>     
                    </div>
                    </div>
                
            </section>
        </>
    )
}

export default Home
