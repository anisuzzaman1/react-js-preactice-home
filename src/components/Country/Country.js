import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, timezones, nativeName } = props.country;
    return (
        <div className='country bg-success bg-gradient'>
            <h3 className='text-wrap fs-1 text'>{name}</h3>
            <p><img src={flag}></img></p>
            <p>Capital: {capital}</p>
            <p>Time Zone: {timezones[0]}</p>
            <p>Native Name: {nativeName}</p>
        </div>
    );
};

export default Country;