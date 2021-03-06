import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div style={{ backgroundColor: '#000', color: '#fff' }} className="countries">
            {/* <h2>List of Countries</h2> */}
            {
                countries.map(country => <Country
                    key={country.alpha3Code}
                    country={country}

                ></Country>)
            }
        </div>
    );
};

export default Countries;