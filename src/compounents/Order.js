import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

const Order = () => {

const history = useHistory()

const [user,setUser]=useState({
  name:"" ,number:"" , order:"" , food:"", howMuch:"", DateAndTime:"", address:"",message:""
})

let name ,value;

const handInput =(event) => {
  console.log(event)
  name = event.target.name;
  value = event.target.value;

  setUser({...user,[name]:value});
}


const postdata = async (event)=>{
 event.preventDefault();

 const{name,number,order,food,howMuch,DateAndTime,address,message}=user;

 const res = await fetch ("/order",{
   method:"POST",
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({
     name,number,order,food,howMuch,DateAndTime,address,message
   })
 });

 const data = await res.json();

 if(data.status === 422 || !data){
   window.alert("invalid")
   console.log("invalid data")
 }else{
   window.alert("valid data")
   console.log("valid data")

   history.push("/");
 }
}

    return (
        <>
            <section className="order_section">
                <div className="container">
                    <div className="row">

                    <div className="order_info">
                    <h5>Order Now</h5>
                    <h1>Free And Fast</h1>
                    </div>

<div className="outer_div">
<div className="inner_div">

    <form  method="POST">
  <div className="form-row">
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4" className="lable">Your Name</label>
      <input type="text" className="form-control input"  onChange={handInput} value={user.name} name="name" placeholder="Enter your name"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Your Number</label>
      <input type="text" className="form-control input"  onChange={handInput} value={user.number} name="number" placeholder="Enter your number"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Your Order</label>
      <input type="text" className="form-control input"    onChange={handInput} value={user.order} name="order" placeholder="Enter your order"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Additional Food</label>
      <input type="text" className="form-control input"    onChange={handInput} value={user.food} name="food" placeholder="Extra with food"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">How much</label>
      <input type="Number" className="form-control input"  onChange={handInput} value={user.howMuch} name="howMuch"  placeholder="how many orders"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Date And Time</label>
      <input type="datetime-local" className="form-control input"   onChange={handInput} value={user.dateAndTime} name="dateAndtime" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Your Address</label><br/>
      <input type="text" className="form-control input"   onChange={handInput} value={user.address} name="address" placeholder="enter your address"/>
     
    </div>
  
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="lable">Your message</label><br/>
      <input type="text" className="form-control input"  id="inputEmail4"  onChange={handInput} value={user.message} name="message" placeholder="enter your message"/>
     
    </div>
  
   
   
  </div>

 
  

   

  
  <button type="submit" className="btn_order" value="order" onClick={postdata}>Order Now</button>
</form>


</div>
</div>












                    </div>
                </div>
            </section>
        </>
    )
}

export default Order
