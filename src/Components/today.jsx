import React from "react";

function Today(props){
    return <div className="details">
        <div className="today-weather">
        <div className="rain weather-box">
            <div className="img"><i className="fas fa-cloud-showers-heavy"></i><h3>RAIN</h3></div>
            <div className="info">
                <h2>{props.weather.current.precip_mm} mm</h2>
            </div>
        </div>
        <div className="Humidity weather-box">
        <div className="img"><i className="fas fa-thermometer-three-quarters"></i><h3>HUMIDITY</h3></div>
            <div className="info">
                <h2>{props.weather.current.humidity}%</h2>
            </div>
        </div>
        <div className="air-quality weather-box">
        <div className="img"><i className="fas fa-lungs"></i><h3>AIR QUALITY</h3></div>
            <div className="info">
                <h2>{Math.floor(props.weather.current.air_quality.pm2_5)}</h2>
            </div>
        </div>
    </div>

    <div className="today-weather">
        <div className="visibility weather-box">
            <div className="img"><i className="fas fa-smog"></i><h3>VISIBILITY</h3></div>
            <div className="info">
                <h2>{props.weather.current.vis_km} km</h2>
            </div>
        </div>
        <div className="UV-rays weather-box">
        <div className="img"><i className="fas fa-sun"></i><h3>UV INDEX</h3></div>
            <div className="info">
                <h2>{props.weather.current.uv}</h2>
            </div>
        </div>
        <div className="wind weather-box">
        <div className="img"><i className="fas fa-wind"></i><h3>WIND</h3></div>
            <div className="info">
                <h2>{props.weather.current.wind_kph} km/hr</h2>
            </div>
        </div>
    </div>
    </div>
}

export default Today;