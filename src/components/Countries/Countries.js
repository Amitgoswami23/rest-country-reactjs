import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './countries.css'; 

const Countries = () => {
    const [countries, setContries] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(data => setContries(data))
    },[])
    return (
        <div>
            <h1>This is countries of its own files: {countries.length}</h1>
            <div className="countries-container">
            {
                countries.map(country => <Country
                    key = {country.capital}
                    country = {country} 
                    // name={country.name} 
                    // capital={country.capital} 
                    // population={country.population}
                    />)
            }
            </div>
        </div>
    )
}

export default Countries

