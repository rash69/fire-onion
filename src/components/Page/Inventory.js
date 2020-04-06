import React from 'react';
import data from '../../Data/Data';

const Inventory = () => {
    const handleInventory = () =>{
       fetch('https://blooming-river-69896.herokuapp.com/addItems', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
       })
       .then(res => res.json())
       .then(data => {
           console.log('post successful', data);
       })
    }
    return (
        
        <div>
            <h1>Add inventory to sell more...</h1>
            <button onClick={handleInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;

