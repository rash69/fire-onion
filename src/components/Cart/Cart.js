import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../auth/useAuth';
import InputItem from '../auth/InputItem/InputItem'
import './Cart.css'
import CartItem from './CartItem';
import { withRouter, Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Cart = (props) => {
  const { cart, checkOutOrder, user} = useContext(UserContext)
  
  const stripePromise = loadStripe('pk_test_Kcu8VbYQQleA5MacGIj2eQep00EwEC1UyH');

  const [address, setAddress] = useState('')
  const [homeNo, setHomeNo] = useState('')
  const [flatNo, setFlatNo] = useState('')
  const [number, setName] = useState('')
  const [instruction, setInstruction] = useState('')
  const [deliveryFee] = useState(2)
  const [vat] = useState(5)
  const [subTotal, setSubTotal] = useState(5)
  
  useEffect(()=> {
      let totalPrice = cart.reduce( (total, item) => total + item.proTotalPrice , 0 )
    setSubTotal(totalPrice)
  },[cart])

  const [disabled, setDisabled] = useState(false)
  useEffect(()=> {
              if(number && homeNo && flatNo && instruction && address) {
                  setDisabled(false)
              } else {
                setDisabled(true)
              }
  },[address,homeNo,flatNo,number,instruction])

  // input field handler
  const onchangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'address') {
      setAddress(value)
    }
    if (name === 'homeNo') {
      setHomeNo(value)
    }
    if (name === 'flatNo') {
      setFlatNo(value)
    }
    if (name === 'phnNo') {
      setName(value)
    }
    if (name === 'instruction') {
      setInstruction(value)
    }
  }

  
if(cart.length === 0) {
  return (
    <div className="container pt-5 mt-5 text-center">
      <h1 className="text-center">You have no item</h1>
        <Link to="/menu" className="text-danger">See our foods.</Link>
    </div>
  )
}

const deliveryDetails = {address, homeNo, flatNo}
const itemDetails = cart[0];



const handleCheckout = (payment) => {
  const orderDetails = { 
    itemDetails,
    email: user.email,
    subTotal,
    deliveryDetails,
    payment: payment
  }
  fetch('https://blooming-river-69896.herokuapp.com/placeOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderDetails)
  })
  .then(res => res.json())
  .then(data => {
    alert('Successfully placed your order and your ID: ' + data._id)

  })
  checkOutOrder()
  props.history.push('/checkout')
  
}

const handleSubmit = e => {
  e.preventDefault()
}





  return (
    <div className="cart-area">
      <div id="order-area">
        <div  className="row d-flex justify-content-between">
          <div className="col-md-6 order-area">
            <div className="delivery-details">
              <h3>Enter your Delivery Details </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <InputItem name="address"
                type="text" placeholder="Deliver to door"
                onchangeHandler={onchangeHandler} value={address} />
              <InputItem name="homeNo"
                type="text" placeholder="House No-32, Road No-2/A, Block-C"
                onchangeHandler={onchangeHandler} value={homeNo} />
              <InputItem name="flatNo"
                type="text" placeholder="Flat No-5, Suit No-122"
                onchangeHandler={onchangeHandler} value={flatNo} />
              <InputItem name="phnNo"
                type="number" placeholder="Phone No"
                onchangeHandler={onchangeHandler} value={number} />
              <div className="form-group">
                <textarea className="form-control"
                  onChange={onchangeHandler}
                  value={instruction}
                  name="instruction"
                  placeholder="Add Delivery Instruction " rows="3"></textarea>
              </div>
              <button type="submit" className="btn sign-up-btn w-100">Save and Continue</button>
            </form>
          </div>
          <div className="col-md-6 f-right">
            <div className="final-order-area">
              <h5 className="restaurant-name">From <span>Chef's Table</span> </h5>
              <h6>Arriving in 20-30 minutes</h6>
              <div className="orders-items-area">
                {cart.map(item => <CartItem item={item} key={item.key} />)}
              </div>
              <div className="order-price-area">
                <div className="cart-item">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>Subtotal: </h5>
                      <h5>Vat:</h5>
                      <h5>Deliver fee:</h5>
                      <h5>Total:</h5>
                    </div>
                    <div className="col-md-4 status">
                      <h5>$ <span id="sub-total-price">{subTotal.toFixed(2)}</span> </h5>
                      <h5>$ <span> {vat}.00</span> </h5>
                      <h5>$ <span>{deliveryFee}.00</span> </h5>
                      <h5>$ <span id="total-price">{(subTotal+vat+deliveryFee).toFixed(2)}</span> </h5>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={disabled} 
                    className={disabled ? 'btn place-order-btn-disable': 'btn sign-up-btn w-100'} 
                    id="place-order" >Place Order</button>
                </div>
              </div>
            </div>
         </div>
        </div>       
      </div>
        <div id="payment-area">
          <h3>Payment procedure </h3>
          <Elements stripe={stripePromise} >
            <CheckoutForm handleCheckout={handleCheckout}></CheckoutForm>
          </Elements>   
        </div>
      </div> 
  );
};

export default withRouter(Cart);