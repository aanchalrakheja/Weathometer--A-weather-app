import React from "react";

function CityComponent(props){
    return (
        <div className="city-component">
            <div className="search-bar">
                <i className="fas fa-times-circle"/>
                <input type="text" placeholder="Search for places ..." onInput={props.handleInput} value={props.input}/>
                <i className="fas fa-search-location" onClick={props.handleClick}/>
            </div>
            {props.loading ? <> </> :
            <>
            <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{props.weather.location.name}, </span>
                <span>{props.weather.location.country}</span>
            </div>
            <div className="weather-img">
                {/* <img src="https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-drizzle.svg" alt="weather-img"></img> */}
                <img src={props.weather.current.condition.icon} alt="weather-img"></img>
            </div>
            <div className="weather-info">
                <div className="temp">{props.weather.current.temp_c}<sup><sup>.</sup>C</sup></div>
                <div className="date-time"><span className="day">{(props.weather.forecast.forecastday[0].date).split("-").reverse().join("/")}</span></div>
                <div className="min-temp">MIN : {props.weather.forecast.forecastday[0].day.mintemp_c} <sup><sup>.</sup>C</sup> </div>
                <div className="max-temp">MAX : {props.weather.forecast.forecastday[0].day.maxtemp_c} <sup><sup>.</sup>C</sup></div>
            </div>
            </>}
        </div>
    )
}

export default CityComponent;