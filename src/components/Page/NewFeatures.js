import React from 'react';
import FeaturingData from '../../Data/Features';
const NewFeatures = () => {
    
    const handleNewFeatures = () =>{
        fetch('https://blooming-river-69896.herokuapp.com/addFeatures', {
         method: 'POST',
         body: JSON.stringify(FeaturingData),
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
            <h1>Add more features and attract more people.</h1>
            <button onClick={handleNewFeatures}>Add new features</button>
        </div>
    );
};

export default NewFeatures;