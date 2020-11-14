import React, { useEffect, useState }  from 'react';
import CardCountry from '../CardCountry/CardCountry';
import CartCountry from '../CartCountry/CartCountry';
import './Countries.css';

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [addCountry, setAddCountry] = useState([]);
    useEffect(() => {
        loadData().then((data) => setCountry(data))
    }, [])
    const loadData = async () => {
        try {
            const res = await fetch("https://restcountries.eu/rest/v2/all");
            const data = res.json();
            return data;
        }catch(err){
            alert("something wrong");
        }
    }
    const handleAddCountry = (country) => {
        setAddCountry([...addCountry, country]);
   }
   const totalCountryPopulation = addCountry.reduce((total, country) => total + country.population, 0);
    return (
        <main>
            <h1 className="text-center mt-3 text-warning">Ultra Nation Countries</h1>
            <div className="row">
               <div className="col-12 col-md-9 d-flex flex-wrap">
                    {
                        country.map(country => 
                        <div className="w-25">
                            <CardCountry country={country} handleAddCountry={handleAddCountry} key={country.numericCode} />
                        </div>)
                    }
               </div>
               <div className="col-12 col-md-3">
                    <div className="favorite-country-info mr-3 mt-3">
                        <h3>My Favorite Countries</h3>
                        <p>Total Country: {addCountry.length}</p>
                        <p>Total Country Population: {totalCountryPopulation}</p>
                    </div>
                    <div>
                        {
                            addCountry.map(country => <CartCountry country={country} key={country.numericCode} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Countries;