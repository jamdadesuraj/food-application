import React from 'react'
import about from "../images/about-img.png";
import { Link } from 'react-router-dom';
import masala from "../images/masala dosa.jpg";
import chat from "../images/chat.jpg"
import vada from "../images/vada.jpg";
import chai from "../images/chai.jpg";
import dal from "../images/dal.jpg";
import idli from "../images/idli.jpg";
import paratha from "../images/paratha.jpg";
import brfi from "../images/brfi.jpg";
import dokala from "../images/dokala.jpg";








const About = () => {
    return (
        <>
        {/* <Navbar/> */}
           <section className="about_section">
               <div className="container">
                   <div className="row">
                   <h4 className="about_head">About Us</h4>
                   <h1 className="about_heading">Why Choose Us?</h1>


                   <div className="col-12 col-md-6 col-lg-6">
                   <img src={about} alt="about-img" className="img-fluid"/>
                   </div>


                   {/* ------------------right side ---------------- */}
                   <div className="col-12 col-md-6 col-lg-6">
                   <div className="about_info">
                   <h3>best food in the country</h3>
                   <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”“I know once people get connected to real food, they never change back.”“I watch cooking change the cook, just as it transforms the food.”“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”</p>
                    
                    <Link to="#" className=" about_btn" data-toggle="modal" data-target="#exampleModalCenter">Learn More</Link>


                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Best food in the country</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body model_img">

   <img src={chai} alt="chai" className="img-fluid" />
                            1) Masala chai
India’s most famous export, masala chai can be found being sold by everywhere from high end restaurants to chaiwallas at train stations. While there’s many different diluted versions of this classic Indian tea around the globe, the real deal can only be found in India. Authentic masala chai is made by brewing black tea on the stove with a mixture of aromatic spices and herbs. Traditionally, the spices used are green cardamom pods, cinnamon sticks, ground cloves and black pepper, creating a wonderful aromatic cup of tea. There’s nothing quite like sipping a hot cup of authentic masala chai first thing in the morning! 

<br /><br />
<img src={vada} alt="vada" className="img-fluid" />
2) Vada pav
Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers. One for carb lovers, vada pav consists of a deep fried potato dumpling placed neatly inside a small bun. The finger food delicacy is generally accompanied by a couple of chutneys and a green chilli, to appeal to the spice loving palettes of Indians up and down the country. Also called a Bombay burger, these mini potato buns can be found in street food stalls across the city of Mumbai. 

<br /><br />

                            <img src={masala} alt="masala dosa" className="img-fluid "  />
                            3) Masala dosa
Arguably South India’s most renowned culinary export, masala dosas are famous the world over. A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils. Making dosas is no easy task, with the batter mixture having to soak in water for at least 24 hours before it can be shaped. Once ready, the batter is ladled onto a hot tava (griddle pan) and shaped in a similar way to how the French would shape a crepe. Traditionally, dosas are served folded in half and stuffed with potatoes. Accompaniments like hot sambar give the dish a spicy edge, and whatever you stuff them with, dosas are sure to provide a tasty yet satisfying meal. 

<br /><br />
<img src={chat} alt="chat" className="img-fluid" />

4) Chaat
Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks. The name derives from three Hindi words meaning ‘a delicacy,’ ‘licking one’s fingers’ and ‘to devour with relish’ and this dish truly does live up to its heritage. Although there’s now a plethora of different varieties, the original chaat is a wonderful combination of diced potato pieces, crispy fried bread and chickpeas garnished with fresh coriander leaves, yoghurt and dried ginger and tamarind sauce. Make like a local and seek out a local dhaba, where the city’s specialist chaat variety will be available at nearly all times of day.

<br /><br />
<img src={dal} alt="dal" className="imf-fluid"/>
5) Dal makhani
Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from. Dal is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are  many different varieties of this lentil dish, dal makhani is in a league of its own. It’s considered the best of the best, and is reserved for big events like wedding celebrations. With makhani meaning ‘buttery’ in Hindi, there’s no prizes for guessing how rich and creamy this Indian classic tastes. Head to Punjab, in India’s north, to taste the real deal. 

<br /><br />

<img src={paratha} alt="paratha" className="img-fluid" />

6) Stuffed paratha
Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India. The word paratha derives from the Sanskrit word atta meaning ‘layers of cooked dough,’ and this dish lives up to its moniker. After leaving the dough (or atta) to rest overnight, parathas are made by cooking the dough on a tava before shallow frying. The most common way to eat parathas is to stuff them with a filling of your choosing. Parathas can be stuffed with any number of fillings, but some of our favourites are aloo paratha (stuffed with potatoes) and methi paratha (stuffed with fenugreek). 

<br /><br />
<img src={dokala} alt="dhokla" className="img-fluid" />
7) Dhokla
Hailed as the regional dish of northwest India, the Gujarati delicacy dhokla is a savoury vegetarian snack made of rice and split chickpeas. It’s tastier than it sounds – Gujaratis eat it for breakfast or lunch, and sometimes even as a snack or side dish. Another dish that takes hours of preparation, dhokla involves soaking the rice and split chickpeas in equal quantities overnight. Then, chilli, coriander, ginger and baking soda are added to add spice to the dish, and help it rise into delicious bite size morsels. Usually served alongside deep fried chilli and  coriander chutney, this Gujarati delicacy is wonderfully moreish. 

 <br /><br />
<img src={brfi} alt="brfi" className="img-fluid" />
 8) Barfi
We’ve cheated a little bit here, as the term barfi can be used to describe any number of Indian sweets. The most traditional type though is milk barfi. Predictably, these milk-based sweets are made from milk powder, condensed milk, ghee and cardamom powder. Barfi is not going to help anyone reach their health-conscious goals, but these indulgent fragrant desserts are sure to bring a smile to the face of anyone who tries them. These sweets are traditionally gifted as good luck offerings at occasions like wedding ceremonies, but there’s nothing to say you can’t pop down to the sweet shop to buy one to accompany your afternoon chai. 

<br /><br />
<img src={idli} alt="idli" className="img-fluid" />
9) Idli
Popular across South India, idli are often thought of as the breakfast versions of dosa. Eaten at the start of the day, idli are a type of light savoury rice cake. Made by steaming a batter consisting of fermented black lentils and rice, these rice cakes are dangerously easy to eat. Since idli are pretty bland on their own, these mini pancake-like breakfast staples are served alongside sambar, coconut based chutneys, or spicy fish curries. Over the years, idli has evolved into many different varieties, so you’re sure to find one that satisfies your taste buds.

<br /><br />

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                               
                            </div>
                            </div>
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

export default About
