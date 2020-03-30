import React from 'react';
import './Search.css';
const Search = () => {
    return (
        <section className="banner-aria">
      <div className="container">
        <div className="row">
            <div className="col text-center banner-content">
                <h2>Best food waiting for your belly</h2>
                <div className="banner-input">
                    <input type="text" placeholder="Search food items"/>
                    <button className="btn primary-btn">Search</button>
                </div>
            </div>
        </div>
      </div>
    </section>
    );
};

export default Search;