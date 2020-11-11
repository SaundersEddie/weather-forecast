// API call to NWS to get weather, we then return in back to the page
// As NWS is open there is no need for a key
import React from 'react';
import axios from 'axios';

    // const myURL = `https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=27603&format=24+hourly`
const getGeoLocationFromZip = `http://api.geonames.org/postalCodeLookupJSON?postalcode=27603&country=US&username=demo`

const myURL = `https://api.weather.gov/points/35.7075,-78.6562`

const getWeather = () => {
    axios.get (myURL)
        .then (function(response) {
            console.log (response);
            return (response);
        })
}

// getWeather();

const WeatherAPI = () => {
    console.log (`Inside Weather API`);
    // Examples for Washington DC
    // https://api.weather.gov/points/38.9072,-77.0369 NWS points for DC
    
    // This gives us the following URLS
    // "forecast": "https://api.weather.gov/gridpoints/LWX/95,71/forecast",
    // "forecastHourly": "https://api.weather.gov/gridpoints/LWX/95,71/forecast/hourly",
    // "forecastGridData": "https://api.weather.gov/gridpoints/LWX/95,71",
    // "observationStations": "https://api.weather.gov/gridpoints/LWX/95,71/stations",
    
    // Alerts
    // https://api.weather.gov/alerts/active?area=DC

    // Others to research
    // https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=20910+25414&format=24+hourly&numDays=7
    // https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=27603&format=24+hourly


    return (
        <>
            <h1>Inside Weather API</h1>
            <h3>{getWeather()}</h3>
        </>
    )
}

export default WeatherAPI;