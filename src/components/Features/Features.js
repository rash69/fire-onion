import React from 'react';
import './Features.css'
const Features = ({item}) => {
    const {title, label, img, icon} = item;
    return (
        <div className="col-md-4">
    <div className="single-item pb-3">
        <div className="card">
            <img className="card-img-top" src={img} alt=""/>
            <div className="card-body choose-area-content d-flex">
            <div className="choose-area-icon w-25">
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

