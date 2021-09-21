import React from 'react'
import './Country.css'; 

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    return (
        <div className="country">
            <h4>This is: {name}</h4>
            <img src={flag} alt="country-flag"/>
            <p>Capital: {capital}</p>
            <p>population: {population}</p>
            <small>Region: {region}</small>
        </div>
    )
}

export default Country
