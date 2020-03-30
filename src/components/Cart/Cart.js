import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../auth/useAuth';
import InputItem from '../auth/InputItem/InputItem'
import './Cart.css'
import CartItem from './CartItem';
import { withRouter, Link } from 'react-router-dom';

const Cart = (props) => {
  const { cart, checkOutOrder } = useContext(UserContext)

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
    if (name === 'name') {
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
        <Link to="/foods" className="text-danger">See our foods.</Link>
    </div>
  )
}


const handleCheckout = () => {
  checkOutOrder()
  props.history.push('/checkout')
}
const handleSubmit = e => {
  e.preventDefault()
}

  return (
    <div className="container pt-5 mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-5">
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
            <InputItem name="name"
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
        <div className="col-md-5 f-right">
          <div className="final-order-aria">
            <h5 className="restaurant-name">From <span>Gulshan Plazza GPR</span> </h5>
            <h6>Arriving in 20-30 minutes</h6>
            <div className="orders-items-aria">

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
                  // className="btn sign-up-btn w-100" 
                  onClick={handleCheckout} >Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Cart);