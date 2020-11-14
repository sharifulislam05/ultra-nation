import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Countries/Countries.css'

const CardCountry = (props) => {
    const handleAddCountry = props.handleAddCountry;
    const {name, flag, population, capital, region, callingCodes} = props.country;
    
    return (
        <div className="card m-3">
            <img className="card-img h-25 w-100  img-fluid" src={flag} alt="Card cap" />
            <div className="card-body text-secondary">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population:{population}</p>
                <p className="card-text">Capital: {capital}</p>
                <p className="card-text">Region: {region}</p>
                <p className="card-text">CallingCodes: {callingCodes}</p>
                <button onClick={() => handleAddCountry(props.country)} className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} />
                Add Country</button>
            </div>
        </div>
    );
};

export default CardCountry;