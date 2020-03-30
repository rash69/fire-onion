import React from 'react';
import { withRouter } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
  const {recipe_name, img, label, price, key} = props.item;
  return (
      <div className="col-md-4" onClick={()=>props.history.push(`/menu/${key}`)}>
        <div className="single-item text-center m-4">
            <div className="card p-4">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{recipe_name}</h5>
                    <p className="card-text">{label}</p>
                    <h4 className="price">${price}</h4>
                </div>
            </div>
        </div>
      </div>
  );
};

export default withRouter(Item);