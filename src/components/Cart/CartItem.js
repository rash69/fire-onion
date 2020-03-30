import React, { useContext } from 'react';
import './CartItem.css'
import { UserContext } from '../auth/useAuth';

const CartItem = ({item}) => {

  const {calculateQuantity} = useContext(UserContext)

  const {img, recipe_name, proTotalPrice, quantity} =item;
  const sortTitle = recipe_name.slice(0,5)
  return (
    <div className="row cart-item">
      <div className="col-3">
        <img src={img} className="w-100" alt="" />
      </div>
      <div className="col-6">
        <div className='cart-item-title'>{sortTitle}</div>
        <div>${proTotalPrice.toFixed(2)}</div>
      </div>
     
        <div className="col-3">
          <button
           onClick={() => calculateQuantity(item, -1)}
            className="btn btn-default"
            ><i className="fas fa-minus"></i></button>
          <h6 className="cart-item-quantity"><span> {quantity} </span></h6>
          <button
          onClick={() => calculateQuantity(item, 1)}
            className="btn btn-default"
            ><i className="fas fa-plus"></i></button>
        </div>
   
  </div>
  );
};

export default CartItem;