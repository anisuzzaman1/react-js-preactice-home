import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='container'>
            <h3>{props.name}</h3>
            <p>Capital: {props.capital}</p>
            <p>Time Zone: {props.timezones}</p>
            <p>Native Name: {props.nativeName}</p>
        </div>
    );
};

export default Country;