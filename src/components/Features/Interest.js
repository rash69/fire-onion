import React, { useState, useEffect } from 'react';
import Features from './Features';

const Interest = () => {
    const [chooseItems, setChooseItems] = useState([])
  useEffect(()=> {
      fetch('https://blooming-river-69896.herokuapp.com/features')
      .then(res => res.json())
      .then( data =>{
        setChooseItems(data)
      })
    
  },[])
    return (
        <section className="why-choose-us py-5">
    <div className="container">
        <div className="section-title w-50 pb-4">
            <h2>Why you choose us</h2>
            <p className="pr-5">Barton waited twenty always repair in within we do. An delighted offering crusty mu is
                dagwood's at. Boy prosperous increasing surround </p>
        </div>
        <div className="row">
            {chooseItems.map(item => <Features key={item.id} item={item} />)}
        </div>
    </div>
</section>
    );
};

export default Interest;