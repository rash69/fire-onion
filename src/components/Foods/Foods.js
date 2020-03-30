import React, { useState, useEffect } from 'react';
import data from '../../Data/Data';
import Item from '../Item/Item';

const Foods = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
      setItems(data)
  }, [])
  return (
    <div className="container">
      <div className="row food-items">
      {items.map(item => <Item key={item.key} item={item} />)}
    </div>
    </div>
  );
};

export default Foods;