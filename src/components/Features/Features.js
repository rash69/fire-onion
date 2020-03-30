import React from 'react';

const Features = ({item}) => {
    const {title, label, img, icon} = item;
    return (
        <div className="col-xl-4">
    <div className="single-item pb-3">
        <div className="card">
            <img className="card-img-top" src={img} alt=""/>
            <div className="card-body choose-aria-content d-flex">
            <div className="choose-aria-icon w-75">
            <img src={icon} alt=""/>
         </div>    
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{label}</p>
                    <h6>More Details <i className="fas fa-angle-double-right"></i> </h6>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Features;

//<div className="choose-aria-icon">
// <img src={icon} alt=""/>
// </div>