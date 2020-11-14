import React from 'react';
import './CartCountry.css'

const CartCountry = ({country}) => {
    const {name, population, region} = country
    return (
        <div className="cart-country mr-3">
            <p>Country: {name}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default CartCountry;